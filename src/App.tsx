import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Paint from './components/PaintApp/Paint'

const styles = {
    width: "100%",
    height: "100%",
    background: "darkcyan"
}

const App = () => {
    return (
        <div style={{width: "100%"}}>
            <div className="row" style={{width: "100%", margin: "0"}}>
                <div className="col-sm-12" style={{padding: "0", height: "10%"}}>
                    <div style={styles}>
                        <span style={{color: "#fff",
                            padding: "15px",
                            display: "block",
                            fontSize: "30px",
                            fontFamily: "cursive",
                            cursor: "pointer"}}>
                            Social Network
                        </span>
                    </div>
                </div>
                {/* PaintApp here... */}
                <div className="col-sm-12" style={{padding: "0"}}>
                    <div style={{display: "flex"}}>
                        <Paint />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
