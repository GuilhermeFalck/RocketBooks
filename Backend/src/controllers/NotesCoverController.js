const AppError = require("../utils/AppError");
const knex = require("../database/knex");
const DiskStorage = require("../providers/DiskStorage");

class NotesCoverController {
  async create(request, response) {
    const note_id = request.params.id;
    const coverFilename = request.file.filename;

    const diskStorage = new DiskStorage();

    const note = await knex("notes").where({ id: note_id }).first();

    if (!note) {
      throw new AppError("Nota não encontrada", 404);
    }

    // Se já houver uma imagem, deletar a anterior
    if (note.image) {
      await diskStorage.deleteFile(note.image);
    }

    const filename = await diskStorage.saveFile(coverFilename);
    note.image = filename; // Atualiza `image` ao invés de `cover`

    // Atualiza a coluna `image` com o novo arquivo salvo
    await knex("notes").update({ image: filename }).where({ id: note_id });

    return response.json({
      message: "Imagem da capa adicionada com sucesso",
      image: filename,
    });
  }
}

module.exports = NotesCoverController;
