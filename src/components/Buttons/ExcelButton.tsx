import React from "react";
import { RiFileExcel2Fill } from "react-icons/ri";
import { FileIcons } from "./style";

function ExcelButton() {
  return (
    <FileIcons>
      <RiFileExcel2Fill size="25" color="green" />
      파일 다운로드
    </FileIcons>
  );
}

export default ExcelButton;
