const express = require('express');
const app = express();

const postsRouter = require('./routes/api/posts');
const profileRouter = require('./routes/api/profile');
const usersRouter = require('./routes/api/users');

const PORT = process.env.PORT || 3000;

app.use('/posts', postsRouter);
app.use('/profile', profileRouter);
app.use('/users', usersRouter);




app.listen(PORT, () => console.log(`Server running on port ${PORT}`));