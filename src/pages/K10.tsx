import { FunctionComponent } from "react";
import styles from "./K10.module.css";
import { MenuItem, TextField } from "@mui/material";
import AddedItem from "./AddedItem";
import useMediaQuery from '@mui/material/useMediaQuery';
const K10: FunctionComponent = () => {

  const mobileView = useMediaQuery('(max-width:400px)');

  return (
    <div className={styles.k10}>
      <nav className={styles.nav}>
        <div className={styles.iconbutton}>
          <div className={styles.unstylediconbutton}>
            <img
              className={styles.menufilledIcon}
              alt=""
              src="/menufilled.svg"
            />
          </div>
        </div>
        <div className={styles.image1Wrapper}>
          <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.iconParent}>
                  <img
                    className={styles.menufilledIcon}
                    alt=""
                    src="/icon.svg"
                  />
                  <div className={styles.div}>ホーム</div>
                </div>
                <img
                  className={styles.menufilledIcon}
                  alt=""
                  src="/icon1.svg"
                />
              </div>
              <nav className={styles.navigationItem}>
                <div className={styles.iconParent}>
                  <img
                    className={styles.menufilledIcon}
                    alt=""
                    src="/icon2.svg"
                  />
                  <div className={styles.div}>登録情報</div>
                </div>
                <img
                  className={styles.menufilledIcon}
                  alt=""
                  src="/icon1.svg"
                />
              </nav>
              <nav className={styles.navigationItem}>
                <div className={styles.iconParent}>
                  <img
                    className={styles.menufilledIcon}
                    alt=""
                    src="/icon3.svg"
                  />
                  <div className={styles.div}>与件一覧</div>
                </div>
                <img
                  className={styles.menufilledIcon}
                  alt=""
                  src="/icon1.svg"
                />
              </nav>
              <nav className={styles.navigationItem}>
                <div className={styles.iconParent}>
                  <img
                    className={styles.menufilledIcon}
                    alt=""
                    src="/icon4.svg"
                  />
                  <div className={styles.div}>担当者一覧</div>
                </div>
                <img
                  className={styles.menufilledIcon}
                  alt=""
                  src="/icon1.svg"
                />
              </nav>
              <nav className={styles.navigationItem3}>
                <div className={styles.iconParent}>
                  <img
                    className={styles.menufilledIcon}
                    alt=""
                    src="/icon5.svg"
                  />
                  <div className={styles.div}>商談管理</div>
                </div>
                <img
                  className={styles.menufilledIcon}
                  alt=""
                  src="/icon1.svg"
                />
              </nav>
              <div className={styles.navigationItem4}>
                <div className={styles.rectangle} />
                <img className={styles.icon10} alt="" src="/icon1.svg" />
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <b className={styles.b}>メディア一覧</b>
                <img className={styles.vectorIcon} alt="" src="/icon6.svg" />
              </div>
              <nav className={styles.navigationItem3}>
                <div className={styles.iconParent}>
                  <img
                    className={styles.menufilledIcon}
                    alt=""
                    src="/icon7.svg"
                  />
                  <div className={styles.div}>お気に入りメディア</div>
                </div>
                <img
                  className={styles.menufilledIcon}
                  alt=""
                  src="/icon1.svg"
                />
              </nav>
              <div className={styles.navigationItem6}>
                <div className={styles.iconParent}>
                  <img
                    className={styles.menufilledIcon}
                    alt=""
                    src="/icon8.svg"
                  />
                  <div className={styles.div}>お知らせ</div>
                </div>
                <img
                  className={styles.menufilledIcon}
                  alt=""
                  src="/icon1.svg"
                />
              </div>
            </div>
            <div className={styles.navigationItem7}>
              <img className={styles.menufilledIcon} alt="" src="/icon9.svg" />
              <div className={styles.div7}>ログアウト</div>
              <img className={styles.icon17} alt="" src="/icon1.svg" />
            </div>
          </div>
          <div className={styles.parent}>
            <div className={styles.description}>広告主</div>
            <div className={styles.frameParent1}>
              <div className={styles.groupWrapper}>
                <div className={styles.ellipseParent}>
                  <div className={styles.groupChild} />
                  <img
                    className={styles.image1Icon1}
                    alt=""
                    src="/image-11@2x.png"
                  />
                </div>
              </div>
              <div className={styles.koukokunushi}>株式会社KOUKOKUNUSHI</div>
            </div>
          </div>
        </div>
      </nav>
      <div className={styles.headingParent}>
        <div className={styles.heading}>
          <b className={styles.b1}>メディア一覧</b>
        </div>
        <div className={styles.frameParent2}>
          <form className={styles.frameForm}>
            <div className={styles.frameParent3}>
              <div className={styles.frameParent4}>
                <div className={styles.wrapper}>
                  <b className={styles.b2}>ジャンル</b>
                </div>
                <div className={styles.buttonoutlinedWrapper}>
                  <button type="button" className={styles.buttonoutlined}>
                    <div className={styles.unstyledbutton}>
                      <div className={styles.content}>
                        <img
                          className={styles.maskedicon}
                          alt=""
                          src="/maskedicon.svg"
                        />
                        <div className={styles.button}>ターゲットを選ぶ</div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.wrapper}>
                  <b className={styles.b3}>メディア種別</b>
                </div>
                <div className={styles.buttonoutlinedContainer}>
                  <button type="button" className={styles.buttonoutlined}>
                    <div className={styles.unstyledbutton}>
                      <div className={styles.content}>
                        <img
                          className={styles.maskedicon}
                          alt=""
                          src="/maskedicon.svg"
                        />
                        <div className={styles.button}>メディア種別を選ぶ</div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.wrapper}>
                  <b className={styles.b3}>対応ファネル</b>
                </div>
                <div className={styles.chips1InputbTextOnlyAParent}>
                  <button type="button" className={styles.chips1InputbTextOnlyA}>
                    <div className={styles.avatar}>
                      <img
                        className={styles.maskedicon}
                        alt=""
                        src="/avatar.svg"
                      />
                    </div>
                    <label className={styles.label}>
                      <div className={styles.label1}>認知</div>
                    </label>
                    <div className={styles.icon18}>
                      <img className={styles.icon19} alt="" src="/-icon.svg" />
                    </div>
                  </button>
                  <button type="button" className={styles.chips1InputbTextOnlyA}>
                    <div className={styles.avatar}>
                      <img
                        className={styles.maskedicon}
                        alt=""
                        src="/avatar1.svg"
                      />
                    </div>
                    <label className={styles.label}>
                      <div className={styles.label1}>興味</div>
                    </label>
                    <div className={styles.icon18}>
                      <img className={styles.icon19} alt="" src="/-icon.svg" />
                    </div>
                  </button>
                  <button type="button" className={styles.chips1InputbTextOnlyA}>
                    <div className={styles.avatar}>
                      <img
                        className={styles.maskedicon}
                        alt=""
                        src="/avatar2.svg"
                      />
                    </div>
                    <label className={styles.label}>
                      <div className={styles.label1}>理解</div>
                    </label>
                    <div className={styles.icon18}>
                      <img className={styles.icon19} alt="" src="/-icon.svg" />
                    </div>
                  </button>
                  <button type="button" className={styles.chips1InputbTextOnlyA}>
                    <div className={styles.avatar}>
                      <img
                        className={styles.maskedicon}
                        alt=""
                        src="/avatar3.svg"
                      />
                    </div>
                    <label className={styles.label}>
                      <div className={styles.label1}>購買 / 来店促進</div>
                    </label>
                    <div className={styles.icon18}>
                      <img className={styles.icon19} alt="" src="/-icon.svg" />
                    </div>
                  </button>
                  <button type="button" className={styles.chips1InputbTextOnlyA}>
                    <div className={styles.avatar}>
                      <img
                        className={styles.maskedicon}
                        alt=""
                        src="/avatar4.svg"
                      />
                    </div>
                    <div className={styles.label8}>
                      <div className={styles.label1}>リピート</div>
                    </div>
                    <div className={styles.icon18}>
                      <img className={styles.icon19} alt="" src="/-icon.svg" />
                    </div>
                  </button>
                  <button type="button" className={styles.chips1InputbTextOnlyA}>
                    <div className={styles.avatar}>
                      <img
                        className={styles.maskedicon}
                        alt=""
                        src="/avatar5.svg"
                      />
                    </div>
                    <label className={styles.label}>
                      <div className={styles.label1}>推奨</div>
                    </label>
                    <div className={styles.icon18}>
                      <img className={styles.icon19} alt="" src="/-icon.svg" />
                    </div>
                  </button>
                </div>
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.wrapper}>
                  <b className={styles.b3}>ターゲット</b>
                </div>
                <div className={styles.buttonoutlinedFrame}>
                  <button type="button" className={styles.buttonoutlined}>
                    <div className={styles.unstyledbutton}>
                      <div className={styles.content}>
                        <img
                          className={styles.maskedicon}
                          alt=""
                          src="/maskedicon.svg"
                        />
                        <div className={styles.button}>ターゲットを選ぶ</div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.wrapper}>
                  <b className={styles.b3}>ターゲット種別</b>
                </div>
                <div className={styles.chips1InputbTextOnlyAParent}>
                  <button type="button" className={styles.chips1InputbTextOnlyA}>
                    <div className={styles.avatar}>
                      <img
                        className={styles.maskedicon}
                        alt=""
                        src="/avatar6.svg"
                      />
                    </div>
                    <div className={styles.label8}>
                      <div className={styles.label1}>toC</div>
                    </div>
                    <div className={styles.icon18}>
                      <img className={styles.icon19} alt="" src="/-icon.svg" />
                    </div>
                  </button>
                  <button  type="button" className={styles.chips1InputbTextOnlyA}>
                    <div className={styles.avatar}>
                      <img
                        className={styles.maskedicon}
                        alt=""
                        src="/avatar7.svg"
                      />
                    </div>
                    <div className={styles.label8}>
                      <div className={styles.label1}>toB</div>
                    </div>
                    <div className={styles.icon18}>
                      <img className={styles.icon19} alt="" src="/-icon.svg" />
                    </div>
                  </button>
                  <button type="button" className={styles.chips1InputbTextOnlyA}>
                    <div className={styles.avatar}>
                      <img
                        className={styles.maskedicon}
                        alt=""
                        src="/avatar8.svg"
                      />
                    </div>
                    <label className={styles.label}>
                      <div className={styles.label1}>両方</div>
                    </label>
                    <div className={styles.icon18}>
                      <img className={styles.icon19} alt="" src="/-icon.svg" />
                    </div>
                  </button>
                </div>
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.wrapper}>
                  <b className={styles.b3}>デモグラ</b>
                </div>
                <div className={styles.buttonoutlinedWrapper1}>
                  <button type="button" className={styles.buttonoutlined}>
                    <div className={styles.unstyledbutton}>
                      <div className={styles.content}>
                        <img
                          className={styles.maskedicon}
                          alt=""
                          src="/maskedicon.svg"
                        />
                        <div className={styles.button}>デモグラを選ぶ</div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.wrapper}>
                  <b className={styles.b2}>主要広告主の業種/商材</b>
                </div>
                <div className={styles.buttonoutlinedFrame}>
                  <div className={styles.buttonoutlined4}>
                    <div className={styles.unstyledbutton}>
                      <div className={styles.content}>
                        <img
                          className={styles.maskedicon}
                          alt=""
                          src="/maskedicon.svg"
                        />
                        <div className={styles.button}>
                          主要広告主の業種/商材を選ぶ
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.wrapper5}>
                  <b className={styles.b3}>下限費用感</b>
                </div>
                <div className={styles.frameWrapper}>
                  <TextField size="small" select id="outlined-basic" fullWidth label="選択してください" variant="outlined" className={styles.textFieldoutlinedParent}>
                    {/* <div className={styles.textFieldoutlined}>
                      <div className={styles.input}>
                        <div className={styles.container1}>
                          <div className={styles.label18}>選択してください</div>
                        </div>
                      </div>
                    </div> */}
                     <MenuItem value="">
              Value
            </MenuItem>
                    {/* <div className={styles.arrowdropdownfilled}>
                      <img
                        className={styles.vectorIcon1}
                        alt=""
                        src="/vector1.svg"
                      />
                    </div> */}
                  </TextField>
                </div>
              </div>
              <div className={styles.frameParent12}>
                <div className={styles.wrapper5}>
                  <b className={styles.b3}>フリーワード</b>
                </div>
                <div className={styles.frameWrapper}>
                 
                <TextField size="small"  id="outlined-basic" fullWidth label="選択してください" variant="outlined" className={styles.textFieldoutlinedParent}></TextField>
                 
                 
                </div>
              </div>
            </div>
            <div className={styles.frame1}>
              <button type="button" className={styles.buttonoutlined5}>
                <div className={styles.unstyledbutton5}>
                  <div className={styles.button5}>検索条件をクリア</div>
                </div>
              </button>
              <button type="button" className={styles.buttonoutlined6}>
                <div className={styles.unstyledbutton5}>
                  <div className={styles.button6}>検索する</div>
                </div>
              </button>
            </div>
          </form>
          <div className={styles.group}>
            <div className={styles.div9}>絞り込み検索</div>
            <img className={styles.menufilledIcon} alt="" src="/icon10.svg" />
          </div>
          <button className={styles.buttonoutlined7}>
            <div className={styles.unstyledbutton5}>
              <button className={styles.content5}>
                <div className={styles.button6}>メディアを比較</div>
                <img
                  className={styles.maskedicon}
                  alt=""
                  src="/masked-icon.svg"
                />
              </button>
            </div>
          </button>
          <div className={styles.frameParent13}>         
           {!mobileView&& <AddedItem additionalFields={{"シーズン限定メニュー":"  直前割引情報があります！"}} imageDetails={{"imageUrl":"/image@2x.png","title":"公開日","date":new Date(2022,11,20),"desc":"   記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル"}}/>}
          {mobileView && <AddedItem top3={["1.食品・飲料 00%","2.家庭用品・トイレタリー 00%"," 3.化粧品 00%"]  } additionalFields={{"シーズン限定メニュー":"  直前割引情報があります！"}} imageDetails={{"imageUrl":"/image@2x.png","title":"公開日","date":new Date(2022,11,20),"desc":"   記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル"}}   />}
            <AddedItem top3={["1.食品・飲料 00%","2.家庭用品・トイレタリー 00%"," 3.化粧品 00%"]  }/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default K10;
