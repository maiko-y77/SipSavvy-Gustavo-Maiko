const Tab = ({ text, isActive } : { text: string, isActive: boolean }) => {
    
    return (
            <div className={`tab ${isActive ? 'active' : ''}`}>{text}</div>
    );
}

export default Tab;