const arr = [];

const addBalls = (...balls) => {

    console.log(balls);

    arr.push(...balls);
    return arr;
}


addBalls(...['a', 'b', 'c']);

console.log(arr);

let BallCount = ['RedBall', 'GreenBall', 'BlackBall', 'WhiteBall'];
const BallFilter = () => {
    return BallCount.filter((balls) => {
        const ball = balls != 'WhiteBall';
        return ball;
    })
} 

console.log(BallFilter());