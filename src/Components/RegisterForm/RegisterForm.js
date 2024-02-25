import "./RegisterForm.css";
import React from "react";
import { useForm } from "react-hook-form";
import { FormattedMessage, useIntl } from "react-intl";
import { FormControl, Input, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const RegisterForm = () => {
  // const {register, handleSubmit, watch, formState: { errors }, } = useForm();
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const [formData, setFormData] = React.useState(null);
  // const [validDataForm, setValidDataForm] = React.useState(false)

  // const onSubmit = (data) => setFormData(data);
  const { formatMessage } = useIntl();

  const onSubmit = (data) => {
    fetch(API_URL, {
      method:'POST',
      body: JSON.stringify(data), 
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log(response)
        if (response.status === 201) {
          navigate("/users")
          } 
      })
  };

  return (
    <div>
      <Text fontSize="4xl">
        <FormattedMessage id="createUserPage.title" />
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <fieldset>
            <Input
              size="md"
              width="400px"
              margin="10px"
              id="name"
              placeholder={formatMessage({ id: "createUserPage.name" })}
              type="text"
              {...register("name", { required: true })}
            />
            {errors?.name && (
              <p><FormattedMessage id="createUserPage.required" /></p>
            )}
          </fieldset>

          <fieldset>
            <Input
              size="md"
              width="400px"
              margin="10px"
              id="userName"
              placeholder={formatMessage({ id: "createUserPage.username" })}
              type="text"
              {...register("userName", { required: true, minLength: 3 })}
            />
            {errors?.userName && (
              <p><FormattedMessage id="createUserPage.required" /></p>
            )}
          </fieldset>

          <fieldset>
            <Input
              size="md"
              width="400px"
              margin="10px"
              id="email"
              placeholder={formatMessage({ id: "createUserPage.email" })}
              type="text"
              {...register("email", { required: true, minLength: 3 })}
            />
            {errors?.email && (
              <p><FormattedMessage id="createUserPage.required" /></p>
            )}
          </fieldset>

          <fieldset>
            <Input
              size="md"
              width="400px"
              margin="10px"
              id="phone"
              placeholder={formatMessage({ id: "createUserPage.phone" })}
              type="number"
              {...register("phone", { required: true, minLength: 6 })}
            />
            {errors?.phone && (
              <p><FormattedMessage id="createUserPage.required" /></p>
            )}
          </fieldset>

          <fieldset>
            {/* <FormLabel htmlFor="website"><FormattedMessage id='createUserPage.website' /></FormLabel> */}
            <Input
              size="md"
              width="400px"
              margin="10px"
              id="website"
              placeholder={formatMessage({ id: "createUserPage.website" })}
              type="text"
              {...register("website", { required: true, minLength: 3 })}
            />
            {errors?.website && (
              <p><FormattedMessage id="createUserPage.required" /></p>
            )}
          </fieldset>

          <Button
            colorScheme="blue"
            marginBlock="40px"
            type="submit"
          >
            <FormattedMessage id="createUserPage.submitButton" />
          </Button>
        </FormControl>

        {/* <h2>Datos del formulario:</h2>
      <p>First name: {formData?.name}</p>
      <p>Last name: {formData?.userName}</p>

      <h2>Datos del formulario en "caliente":</h2>
      <p>First name: {watch('name')}</p>
      <p>Last name: {watch('userName')}</p> */}
      </form>
    </div>
  );
};

export default RegisterForm;
