// IMPORT OUR DATA MODEL
const Books = require("./../models/bookModel");
// CREATE ROUTE HANDLERS
// exports.getIndex = (request, response) => {
//   response.send("Index Homepage Hello");
// };
// LET'S CREATE OUR INDEX PAGE
exports.getBooks = async (request, response) => {
  try {
    // Let's retrieve all of the todos inside our db
    const todos = await Books.find();
    // Send response
    response.status(200).json({
      status: "success",
      results: todos.length,
      data: {
        todos,
      },
    });
  } catch (error) {
    response.status(500).json({
      status: "error",
      data: {
        error: error.message,
      },
    });
  }
};
exports.createBook = async (request, response) => {
  try {
    // Create a new todo
    const newBook = await Books.create(request.body);
    // Send a response
    response.status(201).json({
      status: "success",
      data: {
        newBook,
      },
    });
  } catch (error) {
    response.status(500).json({
      status: "error",
      error: error.message,
    });
  }
};
exports.getOneBook = async (request, response) => {
  try {
    // Let's retrieve a single todo
    const todo = await Books.findById(request.params.id);
    // Send a response
    response.status(200).json({
      status: "success",
      data: {
        todo,
      },
    });
  } catch (error) {
    response.status(500).json({
      status: "error",
      error: error.message,
    });
  }
};
exports.deleteBook = async (request, response) => {
  try {
    // Let's retrieve a single todo
    await Books.findByIdAndDelete(request.params.id);
    // Send a response
    response.status(204).json({
      status: "success",
      data: {},
    });
  } catch (error) {
    response.status(500).json({
      status: "error",
      error: error.message,
    });
  }
};
exports.updateBook = async (request, response) => {
  try {
    // Let's retrieve a single todo
    const updatedBook = await Books.findByIdAndUpdate(
      request.params.id,
      request.body,
      { new: true }
    );
    // Send a response
    response.status(200).json({
      status: "success",
      data: {
        updatedBook,
      },
    });
  } catch (error) {
    response.status(500).json({
      status: "error",
      error: error.message,
    });
  }
};