import './style.css'

const Footer = ({cover, title, session}) => <footer className="footer">
    <img src={cover} alt="cover" />
    <div>
        <p>{title}</p>
        <p>{session.weekday} - {session.time}</p>
    </div>
</footer>

export default Footer