import React, { Component } from 'react';
import { useState } from 'react';
import Delete from '../images/pages/common/delete.png';
import '../styles/css/pages/WorkContract.css';
import PageHeaderIconButton from '../components/PageHeader/PageHeaderIconButton';
import PageHeaderTextButton from '../components/PageHeader/PageHeaderTextButton';
import CustomCalendar from '../components/Contents/CustomCalendar';
import CustomInput from '../components/Contents/CustomInput';
import CustomButton from '../components/Contents/CustomButton';
import SearchBarBox from '../components/SearchBar/SearchBarBox';
import Table from '../components/TablesLib/Table';
import Input from '../components/Contents/Input';

const WorkContract = () => {

  const [employeeData, setEmployeeData] = useState([]);
  const [openPostcode, setOpenPostcode] = useState(false);
  const [empList, setEmpList] = useState([]);
  const [zonecode, setZonecode] = useState("");
  const [address, setAddress] = useState("");

  const handleAddressButtonClick = () => {
    setOpenPostcode(true);
  };

  const handleAddressSelect = (addr) => {
    console.log(`
        우편번호: ${addr.zonecode}
        주소: ${addr.address}
    `);
    // // 주소와 우편번호 값을 가져온 데이터로 설정
    // const address = data.address;
    // const zipcode = data.zipcode;
  
    // // 상태를 업데이트하여 주소와 우편번호를 입력란에 설정
    // setEmpList((prevEmpList) => [
    //   ...prevEmpList,
    //   {
    //     // 이전 데이터 유지하고 주소와 우편번호 추가
    //     address: address, // 주소 상태 값 사용
    //     zipcode: zipcode, // 우편번호 상태 값 사용
    //   },
    // ]);
    setZonecode(data.zonecode); // 선택된 우편번호로 우편번호 상태 업데이트
    setAddress(data.address); // 선택된 주소로 주소 상태 업데이트
    setOpenPostcode(false); // 모달 닫기
  }
  const data = React.useMemo(
    () =>
      empList.map((emp) => ({
        checkbox: false,
        code: emp.cdEmp,
        employee: emp.nmEmp,
        foreign: emp.fgForeign,
        resident: emp.noResident,
      })),
    [empList]
  );
  const columns = React.useMemo(
    () => [
      {
        Header: "✓",
        accessor: "checkbox",
        id: "checkbox",
        Cell: ({ cell: { value } }) => <input type="checkbox" />,
      },
      {
        Header: "Code",
        accessor: "code",
        id: "code",
        width: "20%",
        Cell: ({ cell: { value } }) => {
          const [inputValue, setInputValue] = React.useState(value);

          const handleInputChange = (e) => {
            setInputValue(e.target.value);
          };
          const handleInputClick = (e) => {
            console.log(e.target);
          };

          return (
            <Input
              value={inputValue}
              onClick={handleInputClick}
              onChange={handleInputChange}
            />
          );
        },
      },
      {
        Header: "사원명",
        accessor: "employee",
        id: "employee",
        width: "20%",
        Cell: ({ cell: { value } }) => {
          const [inputValue, setInputValue] = React.useState(value);

          const handleInputChange = (e) => {
            setInputValue(e.target.value);
          };

          return (
            <Input
              value={inputValue}
              onChange={handleInputChange}
            />
          );
        },
      },
      {
        Header: "내/외",
        accessor: "foreign",
        id: "foreign",
        width: "12%",
        Cell: ({ cell: { value } }) => {
          const [inputValue, setInputValue] = React.useState(value);

          const handleInputChange = (e) => {
            setInputValue(e.target.value);
          };

          return (
            <Input
              value={inputValue}
              onChange={handleInputChange}
            />
          );
        },
      },
      {
        Header: "주민번호",
        accessor: "resident",
        id: "resident",
        Cell: ({ cell: { value } }) => {
          const [inputValue, setInputValue] = React.useState(value);

          const handleInputChange = (e) => {
            setInputValue(e.target.value);
          };

          return (
            <Input
              value={inputValue}
              onChange={handleInputChange}
            />
          );
        },
      },
    ],
    []
  );
  
  

    
    return (
      <>
        <div className="pageHeader">
          <div className="innerBox fxSpace">
            <h2 className="pageHeaderName">표준근로계약서</h2>
            <div className="fxAlignCenter">
              <div className="btnWrapper textBtnWrap">
                <PageHeaderTextButton text="전자서명 메일 보내기" /*onClick={''}*/ />
              </div>
              <div className="iconBtnWrap">
                <PageHeaderIconButton btnName="delete" imageSrc={Delete} altText="삭제" />
              </div>
            </div>
          </div>
        </div>

    
         <div>
          <button className='wcCreSelButton1'> 계약서 작성</button>  
          <button className='wcCreSelButton2'> 계약서 조회</button>
        </div> 
        <div ></div> 
        {/* 기본으로 작성 page 보여주고 조회 Tab 누르면 조회 Component보여줄 것.  */}


        <div className="searchBar">
          <div className="innerBox fxSpace">
            <div className="selectWrapper">
              <div className="searchBarBox">
                <span className="searchBarName">작성일자</span>
              </div>
              <CustomCalendar width="130" id="selectCreDate" />
              <div className="searchBrBox">
                <span className="searchBarName">정렬</span>
                <select id="order" name="order" className="selectBox" defaultValue="0">
                  <option value="1"> 사원코드순</option>
                  <option value="2"> 사원이름순</option>
                </select>
              </div>
            </div>
            <div className="btnWrapper">
              <button className="gray">조회</button>
            </div>
          </div>
        </div>
        <section className="section">
          <div className="wc-grid-container">
            <div className=" wc-grid-cell-item1 ">
            
              <Table
                columns={columns}
                data={data}
                showInsertRow={true}
                checkboxWidth={"10%"}
              />
            
            

              <table className="wc-bottom-table">
                <tr>
                  <th>조회된 사원</th>
                  <th>{}명</th>
                </tr>
              </table>
            </div>

            <div className="wc-grid-cell-item2">
              <h1 className="wc-right-head">근로계약서</h1>
              <table className="wc-right-first-table">
                <tr>
                  <td className="wc-right-first-table-left-td"> 근로계약기간 : </td>
                  <td className="wc-right-first-table-right-td-first">
                    <CustomCalendar width="179" id="startDate" />
                  </td>
                  <td className="wc-right-first-table-right-td">
                    <CustomCalendar width="179" id="endDate" />
                  </td>
                </tr>
                <tr>
                  <td className="wc-right-first-table-left-td">근무장소 : </td>
                  <td className="wc-right-first-table-right-td-first">
                    <CustomInput />
                  </td>
                  <td className="wc-right-first-table-right-td wc-right-cell-td-size">
                    <CustomInput width={400} />
                  </td>
                  <td className="wc-right-first-table-right-td-first">
                    <CustomButton
                      className="wc-right-cell-search-button"
                      text="검색"
                      color="black"
                      onClick={"handleAddressButtonClick"}
                    />
                  </td>
                </tr>
                <tr>
                  <th className="wc-right-first-table-left-td">상세주소 : </th>
                  <td className="wc-right-first-table-right-td-first" colSpan="5">
                    <CustomInput width={605} />
                  </td>
                </tr>
                <tr>
                  <td className="wc-right-first-table-left-td">업무의 내용 :</td>

                  <td className="wc-right-first-table-right-td-first">
                    <CustomInput></CustomInput>
                  </td>
                </tr>
                <tr>
                  <td className="wc-right-first-table-left-td">소정근로시간 :</td>
                  <td className="wc-right-first-table-right-td-first">
                    <CustomInput></CustomInput>
                  </td>
                  <td className="wc-right-first-table-right-td">
                    <CustomInput></CustomInput>
                  </td>
                </tr>
                <tr>
                  <td className="wc-right-first-table-left-td">휴게시간 :</td>
                  <td className="wc-right-first-table-right-td-first">
                    <CustomInput></CustomInput>
                  </td>
                  <td className="wc-right-first-table-right-td">
                    <CustomInput></CustomInput>
                  </td>
                </tr>
                <tr>
                  <td className="wc-right-first-table-left-td">근무일 : </td>
                  <td className="wc-right-first-table-right-td-first">
                    <SearchBarBox
                      options={[
                        { value: '1', label: '1주에 1일' },
                        { value: '2', label: '1주에 2일' },
                        { value: '3', label: '1주에 3일' },
                        { value: '4', label: '1주에 4일' },
                        { value: '5', label: '1주에 5일' },
                        { value: '6', label: '1주에 6일' },
                        { value: '7', label: '1주에 7일' },
                      ]}
                      defaultValue="5"
                    />
                  </td>
                  <td className="wc-right-first-table-right-td"></td>
                </tr>
                <tr>
                  <td className="wc-right-first-table-left-td">주휴일 :</td>
                  <td className="wc-right-first-table-right-td-first">
                    <SearchBarBox
                      options={[
                        { value: '1', label: '매주 월요일' },
                        { value: '2', label: '매주 화요일' },
                        { value: '3', label: '매주 수요일' },
                        { value: '4', label: '매주 목요일' },
                        { value: '5', label: '매주 금요일' },
                        { value: '6', label: '매주 토요일' },
                        { value: '7', label: '매주 일요일' },
                      ]}
                      defaultValue="7"
                    />
                  </td>
                  <td className="wc-right-first-table-right-td"></td>
                </tr>
                <tr>
                  <td className="wc-right-first-table-left-td">임금유형 :</td>
                  <td className="wc-right-first-table-right-td-first">
                    <SearchBarBox
                      options={[
                        { value: '1', label: ' 월급 ' },
                        { value: '2', label: ' 일급 ' },
                        { value: '3', label: ' 시급 ' },
                      ]}
                      defaultValue="1"
                    />
                  </td>
                  <td className="wc-right-first-table-right-td">
                    <CustomInput></CustomInput>
                  </td>
                </tr>
                <tr>
                  <td className="wc-right-first-table-left-td">임금지급일 :</td>
                  <td className="wc-right-first-table-right-td-first">
                    <SearchBarBox
                      options={[
                        { value: '1', label: ' 매월 ' },
                        { value: '2', label: ' 매주 ' },
                        { value: '3', label: ' 매일 ' },
                      ]}
                      defaultValue="1"
                    />
                  </td>
                  <td className="wc-right-first-table-right-td">
                    <CustomInput></CustomInput>
                  </td>
                </tr>
                <tr>
                  <td className="wc-right-first-table-left-td">지급방법 : </td>
                  <td className="wc-right-first-table-right-td-first">
                    <SearchBarBox
                      options={[
                        { value: '1', label: ' 예금통장에 입금 ' },
                        { value: '2', label: ' 직접지급 ' },
                      ]}
                      defaultValue="1"
                    />
                  </td>
                  <td className="wc-right-first-table-right-td"></td>
                </tr>
                <tr>
                  <td className="wc-right-first-table-left-td"> 고용보험 : </td>
                  <td className="wc-right-first-table-right-td-first">
                    <SearchBarBox
                      options={[
                        { value: '1', label: ' 여 ' },
                        { value: '2', label: ' 부 ' },
                      ]}
                      defaultValue="1"
                    />
                  </td>
                  <td className="wc-right-first-table-right-td"></td>
                </tr>
                <tr>
                  <td className="wc-right-first-table-left-td"> 산재보험 : </td>
                  <td className="wc-right-first-table-right-td-first">
                    <SearchBarBox
                      options={[
                        { value: '1', label: ' 여 ' },
                        { value: '2', label: ' 부 ' },
                      ]}
                      defaultValue="1"
                    />
                  </td>
                  <td className="wc-right-first-table-right-td"></td>
                </tr>
                <tr>
                  <td className="wc-right-first-table-left-td"> 국민연금 : </td>
                  <td className="wc-right-first-table-right-td-first">
                    <SearchBarBox
                      options={[
                        { value: '1', label: ' 여 ' },
                        { value: '2', label: ' 부 ' },
                      ]}
                      defaultValue="1"
                    />
                  </td>
                  <td className="wc-right-first-table-right-td"></td>
                </tr>
                <tr>
                  <td className="wc-right-first-table-left-td"> 건강보험 : </td>
                  <td className="wc-right-first-table-right-td-first">
                    <SearchBarBox
                      options={[
                        { value: '1', label: ' 여 ' },
                        { value: '2', label: ' 부 ' },
                      ]}
                      defaultValue="1"
                    />
                  </td>
                  <td className="wc-right-first-table-right-td"></td>
                </tr>
                <tr>
                  <td className="wc-right-first-table-left-td"> 서명여부 : </td>
                  <td className="wc-right-first-table-right-td-first">
                    <SearchBarBox
                      options={[
                        { value: '1', label: ' 여 ' },
                        { value: '2', label: ' 부 ' },
                      ]}
                      defaultValue="2"
                    />
                  </td>
                  <td className="wc-right-first-table-right-td"></td>
                </tr>
                <tr>
                  <td className="wc-right-first-table-left-td">작성일자 :</td>
                  <td className="wc-right-first-table-right-td-first">
                    <CustomCalendar className={'wcCreatedDateCalander'} width="170" id="createDate" />
                  </td>
                  <td className="wc-right-first-table-right-td"></td>
                </tr>
              </table>
            </div>
          </div>
        </section>
      </>
    );
  }
export default WorkContract;