import React from "react";
import { FileFormat, TypeLanguage } from "src/enums/file.enum";
import { TypegenWrapper } from "src/layout/TypeLayout/TypegenWrapper";

const TypePage = () => {
  return <TypegenWrapper from={FileFormat.JSON} to={TypeLanguage.Rust} />;
};

export default TypePage;
