export const createController = (req, res) => {
  res.status(201).json({ message: "Note created successfully" });
};

export const getcontroller = (req, res) => {
  res.status(200).send("You just fetched the notes!");
}

export const updateController = (req, res) => {
  res.status(200).send("You just updated the notes!");
}

export const deleteController = (req, res) => {
  res.status(200).send("You just deleted the notes!");
}