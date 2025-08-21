import '98.css';
const WinHelp = ({ title, children, width }) => (

    <div className={"window"} style={{ width }}>
        <div className="title-bar">
            <div className="title-bar-text">{title}</div>
            <div className="title-bar-controls">
                <button aria-label="Minimize" />
                <button aria-label="Maximize" />
                <button aria-label="Close" />
            </div>
        </div>

        <div className="window-body" style={{ textAlign: 'center' }}>
            {children}
        </div>
    </div>
);
export default WinHelp;