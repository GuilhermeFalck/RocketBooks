const knex = require("../database/knex");

class NotesController {
  async create(request, response) {
    const { title, description, tags, rating } = request.body;
    const user_id = request.user.id;

    console.log("Request Data:", { title, description, tags, rating });

    const [note_id] = await knex("notes").insert({
      title,
      description,
      user_id,
    });

    // Rating: já ajustado anteriormente
    const ratingInsert = Array.isArray(rating)
      ? rating.map((value) => ({
          note_id,
          rate: value,
        }))
      : [{ note_id, rate: rating }];

    console.log("Rating Data to Insert:", ratingInsert);

    if (ratingInsert.length) {
      await knex("rating").insert(ratingInsert);
    }

    // Ajuste para `tags`: Confere se é um array e faz o mapeamento para o formato correto
    const tagsInsert =
      Array.isArray(tags) && tags.length > 0
        ? tags.map((name) => ({
            note_id,
            name,
            user_id,
          }))
        : []; // Se `tags` não é um array ou está vazio, não insere nada

    console.log("Tags Data to Insert:", tagsInsert);

    if (tagsInsert.length) {
      await knex("tags").insert(tagsInsert);
    }

    return response.json({ message: "Note created successfully" });
  }

  async show(request, response) {
    const { id } = request.params;

    const note = await knex("notes").where({ id }).first();
    const tags = await knex("tags").where({ note_id: id }).orderBy("name");
    const rating = await knex("rating")
      .where({ note_id: id })
      .orderBy("created_at");

    return response.json({
      ...note,
      tags,
      rating,
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("notes").where({ id }).delete();

    return response.json();
  }

  async index(request, response) {
    const { title, tags } = request.query;

    const user_id = request.user.id;

    let notes;

    if (tags) {
      const filterTags = tags.split(",").map((tag) => tag.trim());

      notes = await knex("tags")
        .select(["notes.id", "notes.title", "notes.user_id"])
        .where("notes.user_id", user_id)
        .whereLike("notes.title", `%${title}%`)
        .whereIn("name", filterTags)
        .innerJoin("notes", "notes.id", "tags.note_id")
        .groupBy("notes.id")
        .orderBy("notes.title");
    } else {
      notes = await knex("notes")
        .where({ user_id })
        .whereLike("title", `%${title}%`)
        .orderBy("title");
    }

    const userTags = await knex("tags").where({ user_id });
    const notesWhithTags = notes.map((note) => {
      const noteTags = userTags.filter((tag) => tag.note_id === note.id);

      return {
        ...note,
        tags: noteTags,
      };
    });

    return response.json(notesWhithTags);
  }
}
module.exports = NotesController;
