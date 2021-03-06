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
            'image': 'https://placeimg.com/64/64/1',
            'name': '장효경',
            'birthday': '991011',
            'gender': '여자',
            'job': '대학생'
          },
          {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '송도진',
            'birthday': '960228',
            'gender': '남자',
            'job': '축구선수'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '김원기',
            'birthday': '970721',
            'gender': '남자',
            'job': '개발자'
          }
    ])
})

app.listen(port, () => console.log(`Listening on port ${port}`));