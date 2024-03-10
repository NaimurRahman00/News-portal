export default function Navbar() {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid gray', padding: '2rem'}}>
            <a href="#">
                <span style={{background: '#5D5FEF', padding: '.5rem', borderRadius: '5px'}}>News</span>
                <span style={{color: '#5D5FEF', marginLeft: '.5rem'}}>Portal</span>
            </a>
            <div style={{display: 'flex', gap: '2rem'}}>
                <a href="#" style={{color: '#5D5FEF'}}>News</a>
                <a href="#" style={{color: '#5D5FEF'}}>Blog</a>
            </div>
        </div>
    )
}