import React from 'react'
import style from './EditForm.module.css'
import { useSelector, useDispatch } from 'react-redux'; 
import { actionSaveItem } from "./store/actions";
import { Formik, Form, Field, useFormikContext } from 'formik'
import * as Yup from 'yup';
import { ValidationError } from '../../components/ValidationError'

const PHONE_TEMPLATE_REGEXP = /^\d{3}-\d{2}-\d{2}$/
const validationSchema = Yup.object({
  firstName: Yup.string().min(3).required("Обов'язкове поле"),
  phone: Yup.string().matches(PHONE_TEMPLATE_REGEXP).required("Обов'язкове поле у форматі: 333-33-33"),
})


export function EditForm () {
  const dispatch = useDispatch();
  const editingWaiter = useSelector((state) => state.waiter.editingWaiter);

  const onSubmit = (values, { resetForm }) => {

    const formWaiter = {
      ...editingWaiter,
      ...values,
    }

    dispatch(actionSaveItem(formWaiter))
    resetForm()
  }

  return (
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
  )
}


function SaveButton () {
  const { isValid } = useFormikContext()

  return <button disabled={!isValid} type="submit" className={style.submitBtn}>Save</button>
}

