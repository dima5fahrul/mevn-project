import Kos from "../models/KosModel.js";

export const getAllKos = async (req, res) => {
  try {
    const kos = await Kos.find();
    res.json(kos);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const getKosById = async (req, res) => {
  try {
    const kos = await Kos.findById(req.params.id);
    res.json(kos);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const saveKos = async (req, res) => {
  const kos = new Kos(req.body);
  try {
    const insertedKos = await kos.save();
    res.status(201).json(insertedKos);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const updateKos = async (req, res) => {
  try {
    const updateKos = await Kos.updateOne(
      {
        _id: req.params.id,
      },
      {
        $set: req.body,
      }
    );
    res.status(201).json(updateKos);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const deleteKos = async (req, res) => {
  try {
    const deletedKos = await Kos.deleteOne({
      _id: req.params.id,
    });
    res.status(201).json(deletedKos);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
