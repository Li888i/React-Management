import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '55vh',
    },
    join: {
        marginTop: '5%',
        marginLeft: '26%',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
    call: {
        fontSize: 'x-large',
        fontWeight: 'bold',
    },
    margin: {
        margin: theme.spacing(1),
        backgroundColor: '#483D8B',
    },
    left: {
        paddingRight: '15%',
    },
    ul: {
        listStyle: 'none',
        display: 'flex',
        marginLeft: '20%',
    },
    li: {
        padding: '1%',
    },
    span: {
        fontWeight: 'bold',
    },
    p_b: {
        marginLeft: '22.1%',
        fontSize: 'x-small',
    },
    ul_b: {
        listStyle: 'none',
        marginLeft: '20%',
        fontSize: 'x-small',
    },
    href: {
        textDecoration: 'none',
        color: 'black',
        visibility: 'none',
        focus: 'none',
    },
    img_1: {
        paddingLeft: '10%',
        paddingRight: '1%',
    },
    img: {
        paddingRight: '1%',
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <footer className={classes.footer}>
                <ul className={classes.ul}>
                    <div className={classes.left}>
                        <p className={classes.call}>
                            02-2013-0667
                        </p>
                        <p>
                            평일 09:00 - 18:00 <br />
                            (점심시간 12:20 - 13:30 제외 · 주말/공휴일 제외)
                        </p>
                        <Button variant="contained" size="medium" color="primary" className={classes.margin}>
                            <img src="https://assets.cdn.soomgo.com/icons/icon-download-appstore.svg" />APP STORE
                        </Button>
                        <Button variant="contained" size="medium" color="primary" className={classes.margin}>
                            <img src="https://assets.cdn.soomgo.com/icons/icon-download-palystore.svg" />PLAY STORE
                        </Button>
                    </div>

                    <li className={classes.li}>
                        <span className={classes.span}>진학사란?</span>
                        <div>
                            <center><a className={classes.href} href="#메뉴1">메뉴1</a><br /></center>
                            <center><a className={classes.href} href="#메뉴2">메뉴2</a><br /></center>
                            <center><a className={classes.href} href="#메뉴3">메뉴3</a><br /></center>
                        </div>
                    </li>

                    <li className={classes.li}>
                        <span className={classes.span}>고객안내</span>
                        <div>
                            <center><a className={classes.href} href="#메뉴1">메뉴1</a><br /></center>
                            <center><a className={classes.href} href="#메뉴2">메뉴2</a><br /></center>
                            <center><a className={classes.href} href="#메뉴3">메뉴3</a><br /></center>
                        </div>
                    </li>

                    <li className={classes.li}>
                        <span className={classes.span}>이용안내</span>
                        <div>
                            <center><a className={classes.href} href="#메뉴1">메뉴1</a><br /></center>
                            <center><a className={classes.href} href="#메뉴2">메뉴2</a><br /></center>
                            <center><a className={classes.href} href="#메뉴3">메뉴3</a><br /></center>
                        </div>
                    </li>

                    <li className={classes.li}>
                        <span className={classes.span}>채용공고</span>
                        <div>
                            <center><a className={classes.href} href="#메뉴1">메뉴1</a><br /></center>
                            <center><a className={classes.href} href="#메뉴2">메뉴2</a><br /></center>
                            <center><a className={classes.href} href="#메뉴3">메뉴3</a><br /></center>
                        </div>
                    </li>
                </ul>

                <div>
                    <span>
                        <p className={classes.p_b}>㈜진학어플라이 개발부 솔루션사업팀 장효경PD가 만든 샘플페이지이며 김원기PD와 협동과제를 수행하기 위해 만들어진 페이지입니다.<br />
                            React와 node로 개발하였고, Youtube 강의를 참고하여 제작된 페이지입니다.</p>
                    </span>
                </div>

                <ul className={classes.ul_b}>
                    <li className={classes.bottom_left}>
                        ㈜진학어플라이 대표이사 신원근 서울특별시 종로구 경희궁길 34 진학기획빌딩 apply@jinhakapply.com 1544-7715
                        <a className={classes.img_1} href="#facebook"><img src="https://assets.cdn.soomgo.com/icons/icon-footer-sns-facebook.svg" alt="마스터 페이스북" /></a>
                        <a className={classes.img} href="#instagram"><img src="https://assets.cdn.soomgo.com/icons/icon-footer-sns-instagram.svg" alt="마스터 인스타그램" /></a>
                        <a className={classes.img} href="#blog"><img src="https://assets.cdn.soomgo.com/icons/icon-footer-sns-naverblog.svg" alt="마스터 블로그" /></a>
                        <a className={classes.img} href="#post"><img src="https://assets.cdn.soomgo.com/icons/icon-footer-sns-naverpost.svg" alt="마스터 포스트" /></a>
                        <a className={classes.img} href="#news"><img src="https://assets.cdn.soomgo.com/icons/icon-footer-sns-tistory.svg" alt="마스터 스토리" /></a>
                    </li>
                    <li>
                        사업자등록번호 101-86-62676통신판매업신고번호 2011-서울종로-0738
                    </li>
                    <li>
                        만든 사람 : 장효경 전화 번호 : 02-2013-0667 · 이메일 : wkdgyrud833@jinhakapply.com
                    </li>
                    <li>
                        ⓒJinhakapply Corp.
                    </li>

                </ul>
            </footer>
        </div>
    );
}