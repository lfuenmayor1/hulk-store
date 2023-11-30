import React, { FC } from 'react';
import styles from './DashBoard.module.css';
import Header from '../Header/Header';
import { MenuOptions } from '../../helpers/menuOptions';

interface DashBoardProps {
  children: any
}
const DashBoard  = ( props: DashBoardProps) => {
  return (
    <>
        <Header MenuOptions = {MenuOptions} ></Header>
        <br/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-9 col-lg-10 main">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <ol className="breadcrumb">
                                </ol>
                            </div>
                        </div>
                        <div className="row">
                         {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)
};

export default DashBoard;
