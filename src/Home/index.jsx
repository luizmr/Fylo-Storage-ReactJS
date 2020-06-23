import React from "react";

import "./styles.css";

const Home = () => {
    return (
        <div class="container">
            <div class="filo">
                <div class="inside">
                    <img src={require("../images/logo.svg")} alt="filoLogo" />
                    <div class="icons">
                        <div>
                            <img
                                src={require("../images/icon-document.svg")}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src={require("../images/icon-folder.svg")}
                                alt=""
                            />
                        </div>

                        <div>
                            <img
                                src={require("../images/icon-upload.svg")}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div class="storage">
                <div class="title">
                    <p>
                        You’ve used <strong> 815 GB </strong>of your storage
                    </p>
                </div>

                <div class="bar">
                    <span class="progress"></span>
                </div>

                <div class="gb">
                    <span>0 GB</span>
                    <span>1000 GB</span>
                </div>

                <div class="box-white">
                    <span>185</span>
                    <span>GB Left</span>
                </div>
            </div>
        </div>
    );
};

export default Home;
