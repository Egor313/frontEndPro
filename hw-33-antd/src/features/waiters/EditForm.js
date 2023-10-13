import React, { useEffect } from 'react'
import style from './EditForm.module.css'
import { useSelector, useDispatch } from 'react-redux'; 
import { actionGetOneItem, actionSaveItem } from "./store/actions";
import { Formik, Form, Field, useFormikContext } from 'formik'
import * as Yup from 'yup';
import { ValidationError } from '../../components/ValidationError'
import { useNavigate, useParams } from "react-router-dom";
import { Page } from '../../components/Page'
import { Button } from 'antd'

const PHONE_TEMPLATE_REGEXP = /^\d{3}-\d{2}-\d{2}$/
const validationSchema = Yup.object({
  firstName: Yup.string().min(3).required("Обов'язкове поле"),
  phone: Yup.string().matches(PHONE_TEMPLATE_REGEXP).required("Обов'язкове поле у форматі: 333-33-33"),
})


export function EditForm () {
  let { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const editingWaiter = useSelector((state) => state.waiter.editingWaiter);


  useEffect(() => {
    if (id) {
      dispatch(actionGetOneItem(id))
    }
  }, [id])

  const onSubmit = (values, { resetForm }) => {

    const formWaiter = {
      ...editingWaiter,
      ...values,
    }

    dispatch(actionSaveItem(formWaiter))
    resetForm()
    navigate('/waiter')
  }

  return (
    <Page title='Edit Form'>
      <Formik
            enableReinitialize
            initialValues={editingWaiter}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form>
              <div>
                <label htmlFor="firstName" className={style.label}>First Name</label>
                <Field type="text" name="firstName" />
                <ValidationError name="firstName" />
              </div>

              <div>
                <label htmlFor="phone" className={style.label}>Phone</label>
                <Field type="text" name="phone" />
                <ValidationError name="phone" id='phone'/>
              </div>

              <SaveButton />
            </Form>
      </Formik>
    </Page>
    
  )
}


function SaveButton () {
  const { isValid } = useFormikContext()

  return <Button disabled={!isValid} htmlType='submit'>Save</Button>
}
