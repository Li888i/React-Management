const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/any',
            'name': '장효경',
            'birthday': '991011',
            'gender': '여자',
            'job': '대학생'
          },
          {
            'id': 2,
            'image': 'https://placeimg.com/64/64/any',
            'name': '이예안',
            'birthday': '990830',
            'gender': '여자',
            'job': '대학생'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/any',
            'name': '박정우',
            'birthday': '970409',
            'gender': '남자',
            'job': '대학생'
          }
    ])
})

app.listen(port, () => console.log(`Listening on port ${port}`));