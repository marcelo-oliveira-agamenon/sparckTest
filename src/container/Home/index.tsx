import Header from "../../components/header";
import { Select, Steps, Divider, Tabs } from "antd";
import { RadialChart } from "react-vis";
import { SmileOutlined, MehOutlined, FrownOutlined } from "@ant-design/icons";

import "./styles.scss";
import Sidebar from "../../components/sidemenu";
const { Step } = Steps;
const { Option } = Select;
const { TabPane } = Tabs;

const myData = [
  { angle: 1, innerRadius: 6, radius: 7.5 },
  { angle: 5, innerRadius: 6, radius: 7.5 },
  { angle: 2, innerRadius: 6, radius: 7.5 },
];

function Home() {
  return (
    <div id="home">
      <Header />

      <div className="content">
        <Sidebar />

        <div>
          <div className="header-home">
            <h1>Manage Surveys</h1>
          </div>

          <div className="select-survey">
            <h1>Employee Engagement Results</h1>

            <div className="selects">
              <Select>
                <Option value="a">Survey One Exemple</Option>
                <Option value="d">Survey One Exemple</Option>
                <Option value="s">Survey One Exemple</Option>
                <Option value="c">Survey One Exemple</Option>
                <Option value="cz">Survey One Exemple</Option>
                <Option value="as">Survey One Exemple</Option>
              </Select>

              <Steps current={2} size="small" progressDot>
                <Step title="Created on" description="Oct 21st 2020" />
                <Step title="Opened on" description="Oct 22nd 2020" />
                <Step title="Closed on" description="Oct 22nd 2020" />
              </Steps>
            </div>
          </div>

          <div className="grid-container">
            <div className="card">
              <div className="chart">
                <RadialChart data={myData} width={300} height={300} />
                <h4>
                  <span>66</span>% Engagement Score
                </h4>
              </div>

              <div className="participation">
                <h3>Participation</h3>
                <span>27% (1/6)</span>
              </div>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
                nostrum sapiente quis, officiis fuga ipsum, veritatis cumque rem
                officia voluptatibus voluptatem odio ab perspiciatis quaerat.
                Earum ea odit eaque recusandae.Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Magnam nostrum sapiente quis,
                officiis fuga ipsum, veritatis cumque rem officia voluptatibus
                voluptatem odio ab perspiciatis quaerat. Earum ea odit eaque
                recusandae.
              </p>

              <div className="smiles">
                <section>
                  <div>
                    <SmileOutlined />
                    <h5>Engaged</h5>
                  </div>

                  <span>65%</span>
                </section>

                <section>
                  <div>
                    <MehOutlined />
                    <h5>Neutral</h5>
                  </div>

                  <span>25%</span>
                </section>

                <section>
                  <div>
                    <FrownOutlined />
                    <h5>Disengaged</h5>
                  </div>

                  <span>10%</span>
                </section>
              </div>
            </div>

            <div className="card">
              <h1 className="title">Engagement Driver Scores</h1>

              <div className="scores">
                <h3>Fit</h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia omnis ex maxime mollitia quam reiciendis facilis
                  perferendis eaque eos a, expedita sint minima vero culpa quia
                  nulla dolorum cum. Sapiente. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Officia omnis ex maxime mollitia
                  quam reiciendis facilis perferendis eaque eos a, expedita sint
                  minima vero culpa quia nulla dolorum cum. Sapiente.
                </p>

                <div>
                  <span>75%</span>
                  <h6>effectiviness</h6>
                </div>
              </div>

              <Divider />

              <div className="scores">
                <h3>Aligment</h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia omnis ex maxime mollitia quam reiciendis facilis
                  perferendis eaque eos a, expedita sint minima vero culpa quia
                  nulla dolorum cum. Sapiente. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Officia omnis ex maxime mollitia
                  quam reiciendis facilis perferendis eaque eos a, expedita sint
                  minima vero culpa quia nulla dolorum cum. Sapiente.
                </p>

                <div>
                  <span>97%</span>
                  <h6>effectiviness</h6>
                </div>
              </div>

              <Divider />

              <div className="scores">
                <h3>Team</h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia omnis ex maxime mollitia quam reiciendis facilis
                  perferendis eaque eos a, expedita sint minima vero culpa quia
                  nulla dolorum cum. Sapiente. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Officia omnis ex maxime mollitia
                  quam reiciendis facilis perferendis eaque eos a, expedita sint
                  minima vero culpa quia nulla dolorum cum. Sapiente.
                </p>

                <div>
                  <span>90%</span>
                  <h6>effectiviness</h6>
                </div>
              </div>

              <Divider />

              <div className="scores">
                <h3>Valuing</h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia omnis ex maxime mollitia quam reiciendis facilis
                  perferendis eaque eos a, expedita sint minima vero culpa quia
                  nulla dolorum cum. Sapiente. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Officia omnis ex maxime mollitia
                  quam reiciendis facilis perferendis eaque eos a, expedita sint
                  minima vero culpa quia nulla dolorum cum. Sapiente.
                </p>

                <div>
                  <span>98%</span>
                  <h6>effectiviness</h6>
                </div>
              </div>

              <Divider />

              <div className="scores">
                <h3>Growth</h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia omnis ex maxime mollitia quam reiciendis facilis
                  perferendis eaque eos a, expedita sint minima vero culpa quia
                  nulla dolorum cum. Sapiente. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Officia omnis ex maxime mollitia
                  quam reiciendis facilis perferendis eaque eos a, expedita sint
                  minima vero culpa quia nulla dolorum cum. Sapiente.
                </p>

                <div>
                  <span>88%</span>
                  <h6>effectiviness</h6>
                </div>
              </div>

              <Divider />
            </div>

            <div className="card">
              <br />
              <button className="primary-btn mt-10">new survey</button>
              <button className="primary-btn">apply downgrade</button>
              <button className="share-btn">premium report</button>
              <button className="normal-btn">share report</button>
            </div>

            <div className="turnover">
              <div className="title-turnover">
                <h1>Antecipated Turnover in the Next 12 Months</h1>
                <h4>5 people</h4>
              </div>

              <div className="progress-bar">
                <div></div>
              </div>
            </div>
          </div>

          <div className="overall">
            <div className="title-main">
              <h1>Overall Rate</h1>

              <span>17% (1/6)</span>
            </div>

            <h5>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
              quasi impedit nisi laudantium quae praesentium odit
            </h5>

            <div className="tabsdiv">
              <Tabs defaultActiveKey="1">
                <TabPane tab="DEPARTMENT" key="1">
                  DEPARTMENT
                </TabPane>
                <TabPane tab="TENURE" key="2">
                  TENURE
                </TabPane>
                <TabPane tab="AGE" key="3">
                  AGE
                </TabPane>
                <TabPane tab="GENDER" key="4">
                  GENDER
                </TabPane>
                <TabPane tab="LOCATION" key="5">
                  LOCATION
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
