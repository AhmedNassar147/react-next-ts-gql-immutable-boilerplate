/**
 *  macro bytes
 * https://styled-components.com/docs/tooling#usage
 * 
 * 
  */


import styled from 'styled-components';

export const TodosContainer = styled.section`
  background-color: #292d3e;
  border-radius: 6px;
  color: #40a9ff;
  padding: 8px 10px;
  width: calc((100% - 50px) / 2);
  max-width: calc(100% / 2);
  min-height: calc((100vh - 80px) / 2);
  max-height: calc((100vh - 80px) / 2);
  overflow-y: auto;
  box-shadow: 0 2px 8px #f0f1f2;
`;

export const HeadControllersSection = styled.section`
  height: 42px;
  border-bottom: 1px solid #40a9ff;
  margin-bottom: 10px;
`;

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-font-feature-settings: 'tnum';
  font-feature-settings: 'tnum';
  width: 46%;
  min-width: 0;
  padding: 4px 11px;
  color: rgba(0,0,0,.65);
  font-size: 14px;
  line-height: 1.5715;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all .3s;
  &:hover {
    border-color: #40a9ff;
  border-width: 1px !important;
  };

  &:focus {
    border-color: #40a9ff;
  border-width: 1px !important;
  };
`;


export const TodoContainerItem = styled.div`
  width: 90%;
  height: 43px;
  border-radius: 3px;
  box-shadow: 0 1px 1px #f0f1f2;
  background-color: #fff;
  margin: auto;
  margin-top: 10px;
  padding: 0px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > p {
    color: #000;
  }
`;