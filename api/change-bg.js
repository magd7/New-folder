// api/change-bg.js
export default function handler(req, res) {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#FFF733'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    res.status(200).json({ backgroundColor: randomColor });
}
