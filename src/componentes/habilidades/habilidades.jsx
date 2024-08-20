import './habilidades.css'
import reactLogo from '../../assets/react.svg'
import htmlLogo from '../../assets/logohtml.svg'
import cssLogo from '../../assets/logoCss.svg'
import nodeLogo from '../../assets/logoNode.svg'
import jsLogo from '../../assets/logoJs.svg'
import tsLogo from '../../assets/logoTs.svg'
import nestLogo from '../../assets/logoNest.svg'
import sqlLogo from '../../assets/logoSql.svg'
import gitLogo from '../../assets/logoGit.svg'
import excelLogo from '../../assets/logoExcel.svg'
import cLogo from '../../assets/logoC.svg'
import arduinoLogo from '../../assets/logoArduino.svg'

function Habilidades(){
    return(
        <div className="habilidades">
            <ul>
                <li>
                    <img src={reactLogo} className="logo" alt="React.js" />
                    <h6>React.js</h6>
                </li>
                <li>
                    <img src={htmlLogo} className="logo" alt="HTML" />
                    <h6>HTML</h6>
                </li>
                <li>
                    <img src={cssLogo} className="logo" alt="CSS" />
                    <h6>CSS</h6>
                </li>
                <li>
                    <img src={jsLogo} className="logo" alt="JavaScript" />
                    <h6>JavaScript</h6>
                </li>
                <li>
                    <img src={tsLogo} className="logo" alt="TypeScript" />
                    <h6>TypeScript</h6>
                </li>
                <li>
                    <img src={nodeLogo} className="logo" alt="Node.js" />
                    <h6>Node.js</h6>
                </li>
                <li>
                    <img src={nestLogo} className="logo" alt="Nest.js" />
                    <h6>Nest.js</h6>
                </li>
                <li>
                    <img src={sqlLogo} className="logo" alt="MySql" />
                    <h6>MySql</h6>
                </li>
                <li>
                    <img src={gitLogo} className="logo" alt="Git" />
                    <h6>Git</h6>
                </li>
                <li>
                    <img src={excelLogo} className="logo" alt="Excel" />
                    <h6>Excel</h6>
                </li>
                <li>
                    <img src={cLogo} className="logo" alt="C+" />
                    <h6>C+</h6>
                </li>
                <li>
                    <img src={arduinoLogo} className="logo" alt="Arduinoo" />
                    <h6>Arduino</h6>
                </li>
            </ul>
        </div> 
    )
}

export default Habilidades;