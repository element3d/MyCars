import React from "react";

import { DatePicker, Form, Input, Radio, Select, Space } from "antd";
import { Collapse } from "antd";
import styles from "./styles.module.css";

const sx = {
  rightMargin: {
    marginRight: "10px",
  },
  noBottomMargin: {
    marginBottom: "0",
  },
};

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items = [
  {
    // key: '1',
    label: "Expand",
    children: <div>{text}</div>,
  },
];

const FilteringForm = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
      <Form className={styles.filteringForm}>
        <div className={styles.formTopRow}>
          <Radio.Group onChange={() => {}}>
            <Radio.Button value="button1">All</Radio.Button>
            <Radio.Button value="button2">New</Radio.Button>
            <Radio.Button value="button3">Used</Radio.Button>
          </Radio.Group>
        </div>

        <div className={styles.secondRow}>
          <Form.Item className={styles.flexGrow} style={sx.rightMargin}>
            <Select placeholder="Brand">
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item className={styles.flexGrow} style={sx.rightMargin}>
            <Select placeholder="Series">
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item className={styles.flexGrow} style={sx.rightMargin}>
            <Select placeholder="Generation">
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item className={styles.flexGrow}>
            <Select placeholder="Model">
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
        </div>
        <div className={styles.flexColumnsWrapper}>
          <div className={styles.firstColumn}>
            <Form.Item style={sx.noBottomMargin}>
              <Form.Item className={styles.inlineItems} style={sx.rightMargin}>
                <Select placeholder="Body">
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item className={styles.inlineItems}>
                <Select placeholder="Transmission">
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
            </Form.Item>

            <Space.Compact>
              <Form.Item>
                <DatePicker picker="year" placeholder="From" />
              </Form.Item>
              <Form.Item>
                <DatePicker picker="year" placeholder="To" />
              </Form.Item>
            </Space.Compact>
            <Space.Compact>
              <Form.Item style={sx.noBottomMargin}>
                <Input placeholder="Engine power from" />
              </Form.Item>
              <Form.Item style={sx.noBottomMargin}>
                <Input placeholder="to" />
              </Form.Item>
            </Space.Compact>
          </div>

          <div className={styles.secondColumn}>
            <Form.Item style={sx.noBottomMargin}>
              <Form.Item className={styles.inlineItems} style={sx.rightMargin}>
                <Select placeholder="Engine">
                  <Select.Option value=""></Select.Option>
                  <Select.Option value="deno1">Patrol</Select.Option>
                  <Select.Option value="deno2">Diesel</Select.Option>
                  <Select.Option value="deno3">Hybrid</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item className={styles.inlineItems}>
                <Select placeholder="Drive Configuration Selector">
                  <Select.Option value=""></Select.Option>
                  <Select.Option value="demo1">Front-wheel drive</Select.Option>
                  <Select.Option value="demo2">Back-wheel-drive</Select.Option>
                  <Select.Option value="demo3">Full-wheel-drive</Select.Option>
                </Select>
              </Form.Item>
            </Form.Item>
            <Space.Compact>
              <Form.Item className={styles.flexGrow}>
                <Select placeholder="Milage from">
                  <Select.Option value=""></Select.Option>
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item className={styles.flexGrow}>
                <Select placeholder="to">
                  <Select.Option value=""></Select.Option>
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
            </Space.Compact>
            <Space.Compact>
              <Form.Item className={styles.flexGrow} style={sx.noBottomMargin}>
                <Select placeholder="Acceleration from">
                  <Select.Option value=""></Select.Option>
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item className={styles.flexGrow} style={sx.noBottomMargin}>
                <Select placeholder="to">
                  <Select.Option value=""></Select.Option>
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
            </Space.Compact>
          </div>

          <div className={styles.thirdColumn}>
            <Space.Compact>
              <Form.Item className={styles.flexGrow}>
                <Select placeholder="from">
                  <Select.Option value=""></Select.Option>
                  <Select.Option value="demo1">2.8l</Select.Option>
                  <Select.Option value="demo2">3.0l</Select.Option>
                  <Select.Option value="demo3">3.2l</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item className={styles.flexGrow}>
                <Select placeholder="to">
                  <Select.Option value=""></Select.Option>
                  <Select.Option value="demo1">2.8l</Select.Option>
                  <Select.Option value="demo2">3.0l</Select.Option>
                  <Select.Option value="demo3">3.2l</Select.Option>
                </Select>
              </Form.Item>
            </Space.Compact>
            <Space.Compact>
              <Form.Item>
                <Input placeholder="Price from" className={styles.flexGrow} />
              </Form.Item>
              <Form.Item>
                <Input placeholder="to" className={styles.flexGrow} />
              </Form.Item>
            </Space.Compact>
            <Form.Item style={sx.noBottomMargin}>
              <Form.Item
                className={styles.inlineItems}
                style={{ ...sx.rightMargin, ...sx.noBottomMargin }}
              >
                <Select placeholder="Steering wheel">
                  <Select.Option value=""></Select.Option>
                  <Select.Option value="demo1">Left</Select.Option>
                  <Select.Option value="demo2">Right</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                className={styles.inlineItems}
                style={sx.noBottomMargin}
              >
                <Select placeholder="Transmission">
                  <Select.Option value=""></Select.Option>
                  <Select.Option value="demo1">Yes</Select.Option>
                  <Select.Option value="demo2">No</Select.Option>
                </Select>
              </Form.Item>
            </Form.Item>
          </div>
        </div>
        <Collapse
          size="large"
          bordered={false}
          ghost
          items={items}
          onChange={onChange}
          style={{ marginTop: "5px", padding: "0" }}
        />
      </Form>
    </>
  );
};

export default FilteringForm;
