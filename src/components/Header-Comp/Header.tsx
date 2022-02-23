import React, { Component, useEffect, useRef, useState } from "react";
import style from "./style.header.module.scss";
import header from "../../assets/header.png";
import pizza from "../../assets/pizza.png";
import { Input } from "antd";
import { Modal, Button , Radio , Checkbox , Row , InputNumber , Form ,Select} from "antd";
import { useStore } from "../../store/rootStore";
import { observer } from 'mobx-react-lite';


const MainHeader = observer(() => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isRecieptModalVisible, setIsRecieptModalVisible] = useState(false);
  const [pizzaName, setPizzaName] = useState('');

    const {
      popupDataModal: { setDataa, getDataa ,getDATA},
    } 
    = useStore(null)

    useEffect(() => {
      async function load() {
        await getDataa()
      }
      load()
    }, [])

    const onFill = () => {
      form.setFieldsValue({
        pizzaType : 800,
        quantity: 1,
        checkValues : [50,100]
      });
    };

    const [form] = Form.useForm();

    const reciept=(value : any)=>{
      setIsRecieptModalVisible(true)
      console.log(value)
      if(value.checkValues  == undefined){
        value.checkValues= null
      }
      setDataa(value) 
      setIsRecieptModalVisible(true)
    }

    const showModal=(name : any)=>{
      setPizzaName(name)
        setIsModalVisible(true)
    }
  const handleCancel=()=>{
    setIsModalVisible(false)
    }
    
  const handleOk=()=>{
    setIsModalVisible(false)
    setIsRecieptModalVisible(false)
    }

    return (
        <>
          <div className={style.header}>
            <img src={header} className={style.headerImg} />
          </div>
    
          <h1 className={style.headerHeading}>Enjoy The deals </h1>
          <div className={style.PizzaCardsDiv}>
            <div className={style.pizzaCard}>
              <img src={pizza} className={style.pizzaImg} />
              <h2>Greek Pizza</h2>
              <p className={style.priceTag}>Rs 600 - 1000</p>
              <hr className={style.hrTag} />
              <button
                className={style.orderBtn}
                onClick={()=>{showModal('Greek Pizza'); onFill() }}
              >
                Order Now
              </button>
            </div>
            <div className={style.pizzaCard}>
              <img src={pizza} className={style.pizzaImg} />
              <h2>Chicago Pizza</h2>
              <p className={style.priceTag}>Rs 600 - 1000</p>
              <hr className={style.hrTag} />
              <button
                className={style.orderBtn}
                onClick={()=>{showModal('Chicago Pizza'); onFill() }}>
                Order Now
              </button>
            </div>
            <div className={style.pizzaCard}>
              <img src={pizza} className={style.pizzaImg} />
              <h2>California Pizza</h2>
              <p className={style.priceTag}>Rs 600 - 1000</p>
              <hr className={style.hrTag} />
              <button
                className={style.orderBtn}  onClick={()=>{showModal('California Pizza'); onFill() }}>
                Order Now
              </button>
            </div>
            
  
          </div>


    
          <Modal
          forceRender
            title={pizzaName}
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={null}
            className="modal"
          >
          <Form form={form} onFinish={reciept}>
              <Form.Item name='pizzaType'>
              <Radio.Group >
                <Radio value={600}>
                  Regular <span className={style.priceSpan}>(Rs 600)</span>
                </Radio>
                
                <Radio value={800}>
                  Medium <span className={style.priceSpan}>(Rs 800)</span>
                </Radio>
                <Radio value={1000}>
                  Large <span className={style.priceSpan}>(Rs 1000)</span>
                </Radio>
              </Radio.Group>
              </Form.Item>
              <Form.Item name='checkValues'>
              <Checkbox.Group style={{ width: "100%" }} >
                
                  <Row>
                  <Checkbox value={50}>
                    Extra Cheese <span className={style.ExtraPrice}>(Rs 50)</span>
                  </Checkbox>
                  </Row>
                
                <Row>
                  <Checkbox value={200}>
                    Extra Chicken <span className={style.ExtraPrice}>(Rs 200)</span>
                  </Checkbox>
                </Row>

                <Row>
                  <Checkbox value={100}>
                    Extra Mayo <span className={style.ExtraPrice}>(Rs 100)</span>
                  </Checkbox>
                </Row>
              </Checkbox.Group>
              </Form.Item>
        <Form.Item label='Quantity' name='quantity' >
                <InputNumber
                  min={1}
                  max={10}
                />
              
        </Form.Item>
            <Form.Item >
            <Button
                  shape="round"
                  id="receiptBtn"
                  htmlType="submit"
                >Receipt
                </Button>
            </Form.Item>
            </Form>
          </Modal>
    
          <Modal
            visible={isRecieptModalVisible}
            footer={null}
            onCancel={handleCancel}
          >
            <h1>Order Receipt </h1>
            <h3>Pizza : {pizzaName} </h3>
            <h3>Quantity : {form.getFieldValue('quantity')} </h3>
            <h3>Extra Cheese:{} </h3>
            <h3>Extra Chicken : </h3>
            <h3>Extra Mayo : </h3>
            <h3>Total : </h3>
            <Button type="primary" >
              Edit
            </Button>
            <br/><br/>
            <Button type="primary">
                10% Discount
              </Button>
              <span> </span>
              <Button type="primary">
                20% Discount
              </Button>
    
            <div className={style.orderNowbtnDiv}>
              <Button shape="round">
                Order Now
              </Button>
            </div>
          </Modal>
    
          {/* <Modal
            // title={pizzaName}
            // visible={isDiscountModalVisible}
            footer={null}
            // onCancel={handleCancel}
          >
            <div id="codeSection">
              <h2>
                Discount Code: (Your Discount code is <span></span>)
              </h2>
              <Input
                size="large"
                placeholder="Enter Code"
                // ref={DisCode}
                // onChange={itemEvent}
              />
              <br />
              <br />
              <Button type="primary" >
                Enter
              </Button>
            </div>
          </Modal>
    
          <Modal
            // title={pizzaName}
            // visible={isOrderedModalVisible}
            footer={null}
            // onCancel={handleCancel}
          >
            <h1>Your Order has been PLACED !!!</h1>
          </Modal> */}
        </>
      );
    });


export default MainHeader;

