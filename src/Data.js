import React from "react"
import "./styles.css"

export default function Data() {
    return(
        <div>
            <div className="main-container1">
                <div className="container">
                    <h3>Account details</h3>
                    <select>
                        <option value="" disabled selected hidden>Select Account Type</option>
                        <option value="binance">Binance</option>
                        <option value="bybit">Bybit</option> 
                    </select>
                    <input type="text" placeholder="Account Registered Name"/>
                    <input type="email" placeholder="Account registered Mail ID"/>
                </div>
                
                <div className="container"> 
                    <h3>API-1 Key details</h3>
                    <input type="text" placeholder="API key 1"/>
                    <input type="text" placeholder="Secrete Key 1"/>
                    <input placeholder="Screen shot of the API 1 ticked boxes" />
                </div>
                
            </div>
            <div className="main-container1">
                <div className="container"> 
                    <h3>API-2 Key details</h3>
                    <input type="text" placeholder="API key 2"/>
                    <input type="text" placeholder="Secrete Key 2"/>
                    <input placeholder="Screen shot of the API 2 ticked boxes" />
                </div>
                
                <div className="container"> 
                    <h3>API-3 Key details</h3>
                    <input type="text" placeholder="API key 3"/>
                    <input type="text" placeholder="Secrete Key 3"/>
                    <input placeholder="Screen shot of the API 3 ticked boxes" />
                </div>
            
        </div>
            <div className="main-container1">
                <div className="container"> 
                    <h3>API-4 Key details</h3>
                    <input type="text" placeholder="API key 4"/>
                    <input type="text" placeholder="Secrete Key 4"/>
                    <input placeholder="Screen shot of the API 4 ticked boxes" />
                </div>
                
                <div className="container"> 
                    <h3>API-5 Key details</h3>
                    <input type="text" placeholder="API key 5"/>
                    <input type="text" placeholder="Secrete Key 5"/>
                    <input placeholder="Screen shot of the API 5 ticked boxes" />
                </div>
                
            </div>
            <div className="checkbox-group">
                <h3>Account QC</h3>
                <div>
                    <input type="checkbox" id="futureOption" name="accountQC" value="futureOption"/>
                    <label for="futureOption">Future Option Enabled</label>
                </div>
                <div>
                    <input type="checkbox" id="hedgeMode" name="accountQC" value="hedgeMode"/>
                    <label for="hedgeMode">Hedge Mode Enabled</label>
                </div>
                <div>
                    <input type="checkbox" id="noTradingPosition" name="accountQC" value="noTradingPosition"/>
                    <label for="noTradingPosition">No Current Trading Position</label>
                </div>
            </div>
    </div>
    )
}