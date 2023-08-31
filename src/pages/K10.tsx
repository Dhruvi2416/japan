import { FunctionComponent } from "react";
import styles from "./K10.module.css";
const K10: FunctionComponent = () => {
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
                  <button className={styles.buttonoutlined}>
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
                  <button className={styles.buttonoutlined}>
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
                  <button className={styles.chips1InputbTextOnlyA}>
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
                  <button className={styles.chips1InputbTextOnlyA}>
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
                  <button className={styles.chips1InputbTextOnlyA}>
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
                  <button className={styles.chips1InputbTextOnlyA}>
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
                  <button className={styles.chips1InputbTextOnlyA}>
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
                  <button className={styles.chips1InputbTextOnlyA}>
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
                  <button className={styles.buttonoutlined}>
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
                  <button className={styles.chips1InputbTextOnlyA}>
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
                  <button className={styles.chips1InputbTextOnlyA}>
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
                  <button className={styles.chips1InputbTextOnlyA}>
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
                  <button className={styles.buttonoutlined}>
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
                  <div className={styles.textFieldoutlinedParent}>
                    <div className={styles.textFieldoutlined}>
                      <div className={styles.input}>
                        <div className={styles.container1}>
                          <div className={styles.label18}>選択してください</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.arrowdropdownfilled}>
                      <img
                        className={styles.vectorIcon1}
                        alt=""
                        src="/vector1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent12}>
                <div className={styles.wrapper5}>
                  <b className={styles.b3}>フリーワード</b>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.textFieldoutlined1}>
                    <input className={styles.input1} type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frame1}>
              <button className={styles.buttonoutlined5}>
                <div className={styles.unstyledbutton5}>
                  <div className={styles.button5}>検索条件をクリア</div>
                </div>
              </button>
              <button className={styles.buttonoutlined6}>
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
            <div className={styles.frameParent14}>
              <div className={styles.frame2}>
                <div className={styles.content6}>
                  <img
                    className={styles.maskedIcon1}
                    alt=""
                    src="/masked-icon1.svg"
                  />
                  <img
                    className={styles.menufilledIcon}
                    alt=""
                    src="/icon11.svg"
                  />
                  <div className={styles.button8}>比較</div>
                </div>
              </div>
              <div className={styles.frameParent15}>
                <div className={styles.frameParent16}>
                  <div className={styles.frameParent17}>
                    <div className={styles.frameParent18}>
                      <img
                        className={styles.frameChild}
                        alt=""
                        src="/frame-366@2x.png"
                      />
                      <div className={styles.div10}>主なユーザー属性</div>
                      <div className={styles.frameParent19}>
                        <div className={styles.frameParent20}>
                          <div className={styles.rectangleWrapper}>
                            <div className={styles.frameItem} />
                          </div>
                          <div className={styles.frame3}>
                            <div className={styles.content}>
                              <div className={styles.frameInner} />
                              <div className={styles.description}>
                                男性 : 00%
                              </div>
                            </div>
                            <div className={styles.content}>
                              <div className={styles.rectangleDiv} />
                              <div className={styles.description}>
                                女性 : 00%
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.frameContainer}>
                          <div className={styles.frameParent22}>
                            <section>
                              <div className={styles.frameChild1} />
                            </section>
                            <div className={styles.frameChild2} />
                          </div>
                          <div className={styles.frameParent23}>
                            <div className={styles.rectangleContainer}>
                              <div className={styles.frameChild3} />
                              <div className={styles.description}>
                                30代 男性 : 00%
                              </div>
                            </div>
                            <div className={styles.rectangleContainer}>
                              <div className={styles.frameChild4} />
                              <div className={styles.description}>
                                20代 男性 : 00%
                              </div>
                            </div>
                            <div className={styles.rectangleContainer}>
                              <div className={styles.frameChild5} />
                              <div className={styles.description}>
                                30代 女性 : 00%
                              </div>
                            </div>
                            <div className={styles.rectangleParent3}>
                              <div className={styles.frameChild6} />
                              <div className={styles.description}>
                                その他 : 00%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent24}>
                      <div className={styles.choiceChipbActiveParent}>
                        <div className={styles.choiceChipbActive}>
                          <div className={styles.avatar}>
                            <img
                              className={styles.maskedicon}
                              alt=""
                              src="/avatar9.svg"
                            />
                          </div>
                          <div className={styles.label8}>
                            <div className={styles.label20}>ライフスタイル</div>
                          </div>
                          <div className={styles.icon18}>
                            <img
                              className={styles.icon19}
                              alt=""
                              src="/-icon1.svg"
                            />
                          </div>
                        </div>
                        <b className={styles.title}>MediaTitleMediaTitle</b>
                      </div>
                      <div className={styles.frameParent25}>
                        <div className={styles.frameParent26}>
                          <div className={styles.parent1}>
                            <div className={styles.div11}>メディア概要</div>
                            <div className={styles.descriptionWrapper}>
                              <div className={styles.description6}>
                                概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト
                              </div>
                            </div>
                          </div>
                          <div className={styles.top3Group}>
                            <div className={styles.div11}>対応ファネル</div>
                            <div
                              className={styles.chips1InputbTextOnlyAContainer}
                            >
                              <button className={styles.chips1InputbTextOnlyA9}>
                                <div className={styles.avatar}>
                                  <img
                                    className={styles.maskedicon}
                                    alt=""
                                    src="/avatar10.svg"
                                  />
                                </div>
                                <label className={styles.label}>
                                  <div className={styles.label22}>認知</div>
                                </label>
                                <div className={styles.icon18}>
                                  <img
                                    className={styles.icon19}
                                    alt=""
                                    src="/-icon.svg"
                                  />
                                </div>
                              </button>
                              <button
                                className={styles.chips1InputbTextOnlyA10}
                              >
                                <div className={styles.avatar}>
                                  <img
                                    className={styles.maskedicon}
                                    alt=""
                                    src="/avatar11.svg"
                                  />
                                </div>
                                <label className={styles.label}>
                                  <div className={styles.label24}>興味</div>
                                </label>
                                <div className={styles.icon18}>
                                  <img
                                    className={styles.icon19}
                                    alt=""
                                    src="/-icon.svg"
                                  />
                                </div>
                              </button>
                              <button
                                className={styles.chips1InputbTextOnlyA10}
                              >
                                <div className={styles.avatar}>
                                  <img
                                    className={styles.maskedicon}
                                    alt=""
                                    src="/avatar12.svg"
                                  />
                                </div>
                                <div className={styles.label8}>
                                  <div className={styles.label24}>理解</div>
                                </div>
                                <div className={styles.icon18}>
                                  <img
                                    className={styles.icon19}
                                    alt=""
                                    src="/-icon.svg"
                                  />
                                </div>
                              </button>
                              <button className={styles.chips1InputbTextOnlyA9}>
                                <div className={styles.avatar}>
                                  <img
                                    className={styles.maskedicon}
                                    alt=""
                                    src="/avatar13.svg"
                                  />
                                </div>
                                <div className={styles.label8}>
                                  <div className={styles.label22}>
                                    購買 / 来店促進
                                  </div>
                                </div>
                                <div className={styles.icon18}>
                                  <img
                                    className={styles.icon19}
                                    alt=""
                                    src="/-icon.svg"
                                  />
                                </div>
                              </button>
                              <button
                                className={styles.chips1InputbTextOnlyA10}
                              >
                                <div className={styles.avatar}>
                                  <img
                                    className={styles.maskedicon}
                                    alt=""
                                    src="/avatar14.svg"
                                  />
                                </div>
                                <div className={styles.label8}>
                                  <div className={styles.label24}>リピート</div>
                                </div>
                                <div className={styles.icon18}>
                                  <img
                                    className={styles.icon19}
                                    alt=""
                                    src="/-icon.svg"
                                  />
                                </div>
                              </button>
                              <button
                                className={styles.chips1InputbTextOnlyA10}
                              >
                                <div className={styles.avatar}>
                                  <img
                                    className={styles.maskedicon}
                                    alt=""
                                    src="/avatar15.svg"
                                  />
                                </div>
                                <label className={styles.label}>
                                  <div className={styles.label24}>推奨</div>
                                </label>
                                <div className={styles.icon18}>
                                  <img
                                    className={styles.icon19}
                                    alt=""
                                    src="/-icon.svg"
                                  />
                                </div>
                              </button>
                            </div>
                          </div>
                          <div className={styles.top3Parent}>
                            <div className={styles.div11}>
                              広告主の業種/商材Top3
                            </div>
                            <div className={styles.descriptionWrapper}>
                              <div className={styles.description7}>
                                <p className={styles.p}>1.食品・飲料 00%</p>
                                <p className={styles.p}>
                                  2.家庭用品・トイレタリー 00%
                                </p>
                                <p className={styles.p}>3.化粧品 00%</p>
                              </div>
                            </div>
                          </div>
                          <div className={styles.parent1}>
                            <div className={styles.div11}>メディア種別</div>
                            <div className={styles.descriptionFrame}>
                              <div className={styles.description8}>
                                {" "}
                                ポータルメディア
                              </div>
                            </div>
                          </div>
                          <div className={styles.top3Group}>
                            <div className={styles.div14}>
                              閲覧/視聴/読者ターゲット
                            </div>
                            <div className={styles.descriptionFrame}>
                              <div className={styles.description8}>
                                女性 , 社会人
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.frameParent27}>
                          <div className={styles.localOfferParent}>
                            <img
                              className={styles.localOfferIcon}
                              alt=""
                              src="/local-offer.svg"
                            />
                            <div className={styles.div15}>
                              シーズン限定メニュー
                            </div>
                          </div>
                          <div className={styles.descriptionWrapper2}>
                            <div className={styles.description10}>
                              直前割引情報があります！
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.imageParent}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/image@2x.png"
                    />
                    <div className={styles.frame4}>
                      <div className={styles.div16}>公開日 : 2022/12/20</div>
                      <b className={styles.title1}>
                        記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル
                      </b>
                    </div>
                  </div>
                </div>
                <div className={styles.unstyledbuttonParent}>
                  <button className={styles.unstyledbutton8}>
                    <img
                      className={styles.menufilledIcon}
                      alt=""
                      src="/icon12.svg"
                    />
                    <div className={styles.button5}>お気に入り</div>
                    <div className={styles.unstyledbuttonChild} />
                    <div className={styles.button5}>10</div>
                  </button>
                  <button className={styles.buttonoutlined8}>
                    <div className={styles.unstyledbutton5}>
                      <div className={styles.button6}>お問い合わせ</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.frameParent14}>
              <div className={styles.frame5}>
                <div className={styles.content7}>
                  <img
                    className={styles.maskedIcon1}
                    alt=""
                    src="/masked-icon2.svg"
                  />
                  <img
                    className={styles.menufilledIcon}
                    alt=""
                    src="/icon13.svg"
                  />
                  <div className={styles.button8}>比較</div>
                </div>
              </div>
              <div className={styles.frameParent29}>
                <div className={styles.frameWrapper1}>
                  <div className={styles.frameParent17}>
                    <div className={styles.frameParent18}>
                      <img
                        className={styles.frameChild}
                        alt=""
                        src="/frame-366@2x.png"
                      />
                      <div className={styles.div10}>主なユーザー属性</div>
                      <div className={styles.frameParent19}>
                        <div className={styles.frameParent20}>
                          <div className={styles.rectangleWrapper}>
                            <div className={styles.frameItem} />
                          </div>
                          <div className={styles.frame3}>
                            <div className={styles.content}>
                              <div className={styles.frameInner} />
                              <div className={styles.description}>
                                男性 : 00%
                              </div>
                            </div>
                            <div className={styles.content}>
                              <div className={styles.rectangleDiv} />
                              <div className={styles.description}>
                                女性 : 00%
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.frameContainer}>
                          <div className={styles.frameParent22}>
                            <section>
                              <div className={styles.frameChild1} />
                            </section>
                            <div className={styles.frameChild2} />
                          </div>
                          <div className={styles.frameParent23}>
                            <div className={styles.rectangleContainer}>
                              <div className={styles.frameChild3} />
                              <div className={styles.description}>
                                30代 男性 : 00%
                              </div>
                            </div>
                            <div className={styles.rectangleContainer}>
                              <div className={styles.frameChild4} />
                              <div className={styles.description}>
                                20代 男性 : 00%
                              </div>
                            </div>
                            <div className={styles.rectangleContainer}>
                              <div className={styles.frameChild5} />
                              <div className={styles.description}>
                                30代 女性 : 00%
                              </div>
                            </div>
                            <div className={styles.rectangleParent3}>
                              <div className={styles.frameChild6} />
                              <div className={styles.description}>
                                その他 : 00%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent24}>
                      <div className={styles.choiceChipbActiveParent}>
                        <div className={styles.choiceChipbActive}>
                          <div className={styles.avatar}>
                            <img
                              className={styles.maskedicon}
                              alt=""
                              src="/avatar16.svg"
                            />
                          </div>
                          <div className={styles.label8}>
                            <div className={styles.label20}>ライフスタイル</div>
                          </div>
                          <div className={styles.icon18}>
                            <img
                              className={styles.icon19}
                              alt=""
                              src="/-icon1.svg"
                            />
                          </div>
                        </div>
                        <b className={styles.title}>MediaTitleMediaTitle</b>
                      </div>
                      <div className={styles.frameWrapper2}>
                        <div className={styles.frameParent26}>
                          <div className={styles.parent1}>
                            <div className={styles.div11}>メディア概要</div>
                            <div className={styles.descriptionWrapper}>
                              <div className={styles.description6}>
                                概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト
                              </div>
                            </div>
                          </div>
                          <div className={styles.top3Group}>
                            <div className={styles.div11}>対応ファネル</div>
                            <div
                              className={styles.chips1InputbTextOnlyAContainer}
                            >
                              <button className={styles.chips1InputbTextOnlyA9}>
                                <div className={styles.avatar}>
                                  <img
                                    className={styles.maskedicon}
                                    alt=""
                                    src="/avatar17.svg"
                                  />
                                </div>
                                <label className={styles.label}>
                                  <div className={styles.label22}>認知</div>
                                </label>
                                <div className={styles.icon18}>
                                  <img
                                    className={styles.icon19}
                                    alt=""
                                    src="/-icon.svg"
                                  />
                                </div>
                              </button>
                              <button
                                className={styles.chips1InputbTextOnlyA10}
                              >
                                <div className={styles.avatar}>
                                  <img
                                    className={styles.maskedicon}
                                    alt=""
                                    src="/avatar18.svg"
                                  />
                                </div>
                                <label className={styles.label}>
                                  <div className={styles.label24}>興味</div>
                                </label>
                                <div className={styles.icon18}>
                                  <img
                                    className={styles.icon19}
                                    alt=""
                                    src="/-icon.svg"
                                  />
                                </div>
                              </button>
                              <button
                                className={styles.chips1InputbTextOnlyA10}
                              >
                                <div className={styles.avatar}>
                                  <img
                                    className={styles.maskedicon}
                                    alt=""
                                    src="/avatar19.svg"
                                  />
                                </div>
                                <div className={styles.label8}>
                                  <div className={styles.label24}>理解</div>
                                </div>
                                <div className={styles.icon18}>
                                  <img
                                    className={styles.icon19}
                                    alt=""
                                    src="/-icon.svg"
                                  />
                                </div>
                              </button>
                              <button className={styles.chips1InputbTextOnlyA9}>
                                <div className={styles.avatar}>
                                  <img
                                    className={styles.maskedicon}
                                    alt=""
                                    src="/avatar20.svg"
                                  />
                                </div>
                                <div className={styles.label8}>
                                  <div className={styles.label22}>
                                    購買 / 来店促進
                                  </div>
                                </div>
                                <div className={styles.icon18}>
                                  <img
                                    className={styles.icon19}
                                    alt=""
                                    src="/-icon.svg"
                                  />
                                </div>
                              </button>
                              <button
                                className={styles.chips1InputbTextOnlyA10}
                              >
                                <div className={styles.avatar}>
                                  <img
                                    className={styles.maskedicon}
                                    alt=""
                                    src="/avatar21.svg"
                                  />
                                </div>
                                <div className={styles.label8}>
                                  <div className={styles.label24}>リピート</div>
                                </div>
                                <div className={styles.icon18}>
                                  <img
                                    className={styles.icon19}
                                    alt=""
                                    src="/-icon.svg"
                                  />
                                </div>
                              </button>
                              <button
                                className={styles.chips1InputbTextOnlyA10}
                              >
                                <div className={styles.avatar}>
                                  <img
                                    className={styles.maskedicon}
                                    alt=""
                                    src="/avatar22.svg"
                                  />
                                </div>
                                <label className={styles.label}>
                                  <div className={styles.label24}>推奨</div>
                                </label>
                                <div className={styles.icon18}>
                                  <img
                                    className={styles.icon19}
                                    alt=""
                                    src="/-icon.svg"
                                  />
                                </div>
                              </button>
                            </div>
                          </div>
                          <div className={styles.top3Group}>
                            <div className={styles.div11}>
                              広告主の業種/商材Top3
                            </div>
                            <div className={styles.descriptionWrapper}>
                              <div className={styles.description6}>
                                <p className={styles.p}>1.食品・飲料 00%</p>
                                <p className={styles.p}>
                                  2.家庭用品・トイレタリー 00%
                                </p>
                                <p className={styles.p}>3.化粧品 00%</p>
                              </div>
                            </div>
                          </div>
                          <div className={styles.parent1}>
                            <div className={styles.div11}>メディア種別</div>
                            <div className={styles.descriptionFrame}>
                              <div className={styles.description8}>
                                {" "}
                                ポータルメディア
                              </div>
                            </div>
                          </div>
                          <div className={styles.top3Group}>
                            <div className={styles.div14}>
                              閲覧/視聴/読者ターゲット
                            </div>
                            <div className={styles.descriptionFrame}>
                              <div className={styles.description8}>
                                女性 , 社会人
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.unstyledbuttonGroup}>
                  <button className={styles.unstyledbutton8}>
                    <img
                      className={styles.menufilledIcon}
                      alt=""
                      src="/icon14.svg"
                    />
                    <div className={styles.button5}>お気に入り</div>
                    <div className={styles.unstyledbuttonChild} />
                    <div className={styles.button5}>10</div>
                  </button>
                  <button className={styles.buttonoutlined8}>
                    <div className={styles.unstyledbutton5}>
                      <div className={styles.button6}>お問い合わせ</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default K10;
