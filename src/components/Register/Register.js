import React , {useState} from 'react'
import {
    Row,
    Stack,
    Button,
    Col,
    Form,
    Container,
    Spinner,
} from "react-bootstrap";
//   import { Link } from "react-router-dom";
import "../../assets/css/auth.css"
function Register() {  
    const baseUrl="http://beta.cheefonline.com/public/api";
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    // const navigate  = useNavigate()
    // const[repeatPassword,setRepeatPassword] = useState("");
    async function  SignUp () {
       let signUpParams = {name,password,email,phone}
       console.log(signUpParams)
       let result = await fetch (`${baseUrl}/register`,{
        method: "POST",
        body:JSON.stringify(signUpParams),
        headers:{
            "Content-Type":'application/json',
            "Accept":'application/json'
        }
       })
       result = await result.json()
       localStorage.setItem("USER-INFO",JSON.stringify(result))
    }
    return (
        <Container fluid>
            <Row className="justify-content-center icon-margin">
                <div className="squer-box-icon">
                    <img
                        src="/img/chief.svg"
                        width="49"
                        height="62"
                        className="icon-image-profile "
                    />
                </div>
            </Row>
            <Row className="justify-content-center">
                <div className="main-title">مستخدم جديد</div>
            </Row>

            <Row className=" justify-content-center form-padding">
                <Form className="pt-3 justify-content-center ">
                    <div className="justify-content-center ">
                        <Form.Group controlId="formHorizontalFirstName">
                            <Col sm={12} className="added-postion">
                                <img
                                    src="/img/icx_user.png"
                                    width="21"
                                    height="22"
                                    className="icon-position"
                                />
                                <Form.Control
                                    dir="rtl"
                                    type="text"
                                    className="new-form-edit"
                                    placeholder="الاسم بالكامل"
                                    onChange={(e) => {setName(e.target.value)}}
                                    value={name}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalFirstName">
                            <Col sm={12} className="added-postion">
                                <img
                                    src="/img/ic_email.png"
                                    width="22"
                                    height="18"
                                    className="icon-position"
                                />
                                <Form.Control
                                    dir="rtl"
                                    type="email"
                                    className="new-form-edit"
                                    placeholder="البريد الالكترونى "
                                    onChange={(e) => {setEmail(e.target.value)}}
                                    value={email}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalFirstName">
                            <Col sm={12} className="added-postion">
                                <img
                                    src="/img/ic_email.png"
                                    width="22"
                                    height="18"
                                    className="icon-position"
                                />
                                <Form.Control
                                    dir="rtl"
                                    type="number"
                                    className="new-form-edit"
                                    placeholder="رقم الهاتف"
                                    onChange={(e) => {setPhone(e.target.value)}}
                                    value={phone}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalLastName">
                            <Col sm={12} className="added-postion">
                                <img
                                    src="/img/icx_password.png"
                                    width="18"
                                    height="22"
                                    className="icon-position"
                                />
                                <Form.Control
                                    className="new-form-edit"
                                    type="password"
                                    placeholder=" كتابة كلمة المرور"
                                    onChange={(e) => {setPassword(e.target.value)}}
                                    value={password}
                                />
                            </Col>
                        </Form.Group>
                        {/* <Form.Group as={Row} controlId="formHorizontalLastName">
                            <Col sm={12} className="added-postion">
                                <img
                                    src="/img/icx_password.png"
                                    width="18"
                                    height="22"
                                    className="icon-position"
                                />
                                <Form.Control
                                    className="new-form-edit"
                                    type="password"
                                    placeholder="أعد كتابة كلمة المرور"
                                    onChange={(e) => {setRepeatPassword(e.target.value)}}
                                    value={repeatPassword}
                                />
                            </Col>
                        </Form.Group> */}
                        <Form.Group as={Row}>
                            <Col sm={12}>
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="custom-btn mt-2"
                                    onClick={SignUp}
                                >
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    أنشاء
                                </Button>
                            </Col>
                        </Form.Group>
                        <Col sm={12} className="pt-4">
                            <div className="alert alert-danger" role="alert">
                                البريد الالكروني او كلمة السر غير صحيحة
                            </div>
                        </Col>
                    </div>
                </Form>
            </Row>
            <Stack className="mt-3 p-2" direction="horizontal" gap={3}>
                <div className="enterWith">
                    <b> او </b>
                    أنشئ حساب بـ
                </div>
                <div className=" ms-auto">
                    {/* <Link to="/"> */}
                    <img src="/img/fb.png" width="36" height="36" />
                    {/* </Link> */}
                </div>
                <div className="">
                    {/* <Link to="/"> */}
                    <img src="/img/iconGoogle.png" width="36" height="36" />
                    {/* </Link> */}
                </div>
            </Stack>
            <Row className=" justify-content-center noAccount-padding">
                <div className="hasNoAccount">تملك حساب بالفعل؟</div>
                <Col sm={12}>
                    {/* <a to="/" className="btn btn-light custom-newAccount-btn mt-2">
          تسجيل الدخول
        </a> */}
                </Col>
            </Row>
        </Container>
    )
}

export default Register;