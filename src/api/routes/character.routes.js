const express = require("express");

const Character = require("../models/Character");

const router = express.Router();

const getCharacters = async (req, res) => {
  try {
    const characters = await Character.find();
    return res.status(200).json(characters);
  } catch (error) {
    return next(error);
  }
};

const getCharacterById = async (req, res) => {
  const id = req.params.id;

  try {
    const character = Character.findById(id);
    if (character) {
      return res.status(200).json(character);
    } else {
      return res.status(400).json("No character found by this id");
    }
  } catch (error) {
    return next(error);
  }
};

const getCharacterByAlias = async (req, res) => {
  const { alias } = req.params;

  try {
    const characterByAlias = await Character.find({ alias: alias });
    if (characterByAlias) {
      return res.status(200).json(characterByAlias);
    } else {
      return res.status(400).json("No character found by this alias");
    }
  } catch (error) {
    return next(error);
  }
};

const addCharacter = async (req, res) => {
  try {
    const newCharacter = new Character({
      name: req.body.name,
      age: req.body.age,
      alias: req.body.alias,
    });

    const createdCharacter = await newCharacter.save();
    return res.status(200).json(createdCharacter);
  } catch (error) {
    return next(error);
  }
};

const updateCharacterById = async (req, res) => {
  const { id } = req.params;

  try {
    const editedCharacter = new Character(req.body);
    editedCharacter._id = id;

    const characterUpdated = await Character.findByIdAndUpdate(
      id,
      editedCharacter,
      { new: true }
    );
    return res.status(200).json(characterUpdated);
  } catch (error) {
    return next(error);
  }
};

const deleteCharacter = async (req, res) => {
  const { id } = req.params;

  try {
    await Character.findByIdAndDelete(id);
    return res.status(200).json("Character deleted");
  } catch (error) {
    return next(error);
  }
};

router.get("/", getCharacters);
router.get("/:id", getCharacterById);
router.get("/alias/:alias", getCharacterByAlias);
router.post("/", addCharacter);
router.put("/:id", updateCharacterById);
router.delete("/:id", deleteCharacter);

module.exports = router;
