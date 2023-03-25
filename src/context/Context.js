import { Component, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const Context = createContext();
const loadedUser = JSON.parse(localStorage?.getItem("user"));
const loadedToken = JSON.parse(localStorage?.getItem("token"));

export class ContextProvider extends Component {
  state = {
    user: loadedUser ? loadedUser : null,
    token: loadedToken ? loadedToken : null,
    loginInfo: {
      homeLoginInfo: {},
      loading: true,
    },
    learningPointInfo: {
      LearningPointInfos: [],
      loading: true,
    },
    videoInfo: {
      videoInfo: {},
      loading: true,
    },
    paymentInfo: {
      loading: true,
      paymentInfo: {},
    },
    otherTechnologyInfo: {
      loading: true,
      otherTechnologyInfos: [],
    },
    footerInfo: {
      loading: true,
      FooterInfo: {},
    },
    aboutInfo: {
      loading: true,
      AboutInfo: {},
    },
    coursePlanInfo: {
      loading: true,
      coursePlanInfo: {},
    },
    freeClassInfo: {
      freeClassInfos: [],
      loading: true,
    },
    privacyPolicyInfo: {
      loading: true,
      PrivacyPolicyInfo: {},
    },
    refundPolicyInfo: {
      loading: true,
      RefundPolicyInfo: {},
    },
    termsInfo: {
      loading: true,
      TermInfo: {},
    },
    fileInfo: {
      loading: true,
      files: [],
    },
    messagesInfo: {
      loading: true,
      messages: [],
    },
    tutorialInfo: {
      loading: true,
      tutorials: [],
    },
  };

  // fetched data
  async componentDidMount() {
    await this.fetchedHomeLoginInfo();
    await this.fetchedLearningPointInfo();
    await this.fetchedVideoInfo();
    await this.fetchedPaymentInfoOne();
    await this.fetchedOtherTechnologyInfo();
    await this.fetchedFooterInfo();
    await this.fetchedAboutInfo();
    await this.fetchedCoursePlanInfo();
    await this.fetchedFreeClassInfo();
    await this.fetchedPrivacyInfo();
    await this.fetchedRefundInfo();
    await this.fetchedTermInfo();
    if (this.state?.user && this.state?.token) {
      await this.fetchedFileInfo();
    }
    if (this.state?.user && this.state?.token) {
      await this.fetchedMsgInfo();
    }
    if (this.state?.user && this.state?.token) {
      await this.fetchedTutorialInfo();
    }
  }


  // authentication functions
  userRegistration = async (
    username,
    email,
    phone,
    password,
    payment_mobile_number,
    trxid
  ) => {
    const res = await axios.post(
      "http://localhost:1337/api/auth/local/register",
      {
        username: username,
        email: email,
        phone: phone,
        password: password,
        payment_mobile_number: payment_mobile_number,
        trxid: trxid,
      }
    );
    localStorage.setItem("token", JSON.stringify(res.data?.jwt));
    localStorage.setItem("user", JSON.stringify(res.data?.user));
    this.setState({
      user: res.data?.user,
      token: res.data?.jwt,
    });
  };

  userLogin = async (email, password) => {
    const res = await axios.post("http://localhost:1337/api/auth/local", {
      identifier: email,
      password: password,
    });
    localStorage.setItem("token", JSON.stringify(res.data?.jwt));
    localStorage.setItem("user", JSON.stringify(res.data?.user));
    this.setState({
      user: res.data?.user,
      token: res.data?.jwt,
    });
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.setState({
      user: null,
      token: null,
    });
    toast.success("logout successful");
  };

  // page wise functions
  fetchedHomeLoginInfo = async () => {
    try {
      const res = await axios.get(
        "http://localhost:1337/api/Home-page-login-info"
      );
      this.setState({
        loginInfo: {
          homeLoginInfo: {
            id: res?.data?.data?.id,
            title: res?.data?.data?.attributes?.title,
            sub_title: res?.data?.data?.attributes?.sub_title,
            img_link: res?.data?.data?.attributes?.img_link,
          },
          loading: false,
        },
      });
    } catch (err) {
      console.log("homePageInfo error", err.response?.data?.error?.message);
    }
  };

  fetchedLearningPointInfo = async () => {
    try {
      const res = await axios.get(
        "http://localhost:1337/api/Learning-point?populate=*"
      );
      this.setState({
        learningPointInfo: {
          LearningPointInfos: res.data?.data?.attributes?.learningTopics,
          loading: false,
        },
      });
    } catch (err) {
      console.log(
        "LearningPointInfo error",
        err.response?.data?.error?.message
      );
    }
  };

  fetchedVideoInfo = async () => {
    try {
      const res = await axios.get("http://localhost:1337/api/Video");
      this.setState({
        videoInfo: {
          videoInfo: {
            id: res?.data?.data?.id,
            title: res?.data?.data?.attributes?.title,
            description: res?.data?.data?.attributes?.description,
            video_link: res?.data?.data?.attributes?.video_link,
          },
          loading: false,
        },
      });
    } catch (err) {
      console.log("videoInfo error", err.response?.data?.error?.message);
    }
  };

  fetchedPaymentInfoOne = async () => {
    try {
      const res = await axios.get(
        "http://localhost:1337/api/Payment-other?populate=*"
      );
      this.setState({
        paymentInfo: {
          paymentInfo: {
            payment_img_link: res.data?.data?.attributes?.payment_img_link,
            payment_cove_img_link:
              res.data?.data?.attributes?.payment_cove_img_link,
            descriptions: res.data?.data?.attributes?.descriptions,
            paymentOthersData: res.data?.data?.attributes?.paymentOthersData,
          },
          loading: false,
        },
      });
    } catch (err) {
      console.log("paymentInfo error", err.response?.data?.error?.message);
    }
  };

  fetchedOtherTechnologyInfo = async () => {
    try {
      const res = await axios.get(
        "http://localhost:1337/api/Other-technology?populate=*"
      );
      this.setState({
        otherTechnologyInfo: {
          otherTechnologyInfos: res.data?.data?.attributes?.technologies,
          loading: false,
        },
      });
    } catch (err) {
      console.log(
        "otherTechnologyInfos error",
        err.response?.data?.error?.message
      );
    }
  };

  fetchedFooterInfo = async () => {
    try {
      const res = await axios.get(
        "http://localhost:1337/api/Footer?populate=*"
      );
      this.setState({
        footerInfo: {
          FooterInfo: {
            address: res.data?.data?.attributes?.address,
            phone: res.data?.data?.attributes?.phone,
            email: res.data?.data?.attributes?.email,
            youtube_link: res.data?.data?.attributes?.youtube_link,
            facebook_link: res.data?.data?.attributes?.facebook_link,
            name: res.data?.data?.attributes?.name,
            profession: res.data?.data?.attributes?.profession,
            img_link:
              res.data?.data?.attributes?.img_link?.data?.attributes?.url,
          },
          loading: false,
        },
      });
    } catch (err) {
      console.log("FooterInfo error", err.response?.data?.error?.message);
    }
  };

  fetchedAboutInfo = async () => {
    try {
      const res = await axios.get("http://localhost:1337/api/About");
      this.setState({
        aboutInfo: {
          AboutInfo: {
            mission: res.data?.data?.attributes?.mission,
            vision: res.data?.data?.attributes?.vision,
            about_my: res.data?.data?.attributes?.about_my,
          },
          loading: false,
        },
      });
    } catch (err) {
      console.log("AboutInfo error", err.response?.data?.error?.message);
    }
  };

  fetchedCoursePlanInfo = async () => {
    try {
      const res = await axios.get("http://localhost:1337/api/Course-plane");
      this.setState({
        coursePlanInfo: {
          coursePlanInfo: {
            title: res.data?.data?.attributes?.title,
            description: res.data?.data?.attributes?.description,
            list: res.data?.data?.attributes?.list,
            video_link: res.data?.data?.attributes?.video_link,
          },
          loading: false,
        },
      });
    } catch (err) {
      console.log("coursePlanInfo error", err.response?.data?.error?.message);
    }
  };

  fetchedFreeClassInfo = async () => {
    try {
      const res = await axios.get(
        "http://localhost:1337/api/Free-class?populate=*"
      );
      this.setState({
        freeClassInfo: {
          freeClassInfos: res.data?.data?.attributes?.freeClasses,
          loading: false,
        },
      });
    } catch (err) {
      console.log("freeClassInfos error", err.response?.data?.error?.message);
    }
  };

  fetchedPrivacyInfo = async () => {
    try {
      const res = await axios.get("http://localhost:1337/api/Privacy-policy");
      this.setState({
        privacyPolicyInfo: {
          PrivacyPolicyInfo: {
            description: res.data?.data?.attributes?.description,
          },
          loading: false,
        },
      });
    } catch (err) {
      console.log(
        "PrivacyPolicyInfo error",
        err.response?.data?.error?.message
      );
    }
  };

  fetchedRefundInfo = async () => {
    try {
      const res = await axios.get("http://localhost:1337/api/Refun-policy");
      this.setState({
        refundPolicyInfo: {
          RefundPolicyInfo: {
            policy: res.data?.data?.attributes?.policy,
          },
          loading: false,
        },
      });
    } catch (err) {
      console.log("RefundPolicyInfo error", err.response?.data?.error?.message);
    }
  };

  fetchedTermInfo = async () => {
    try {
      const res = await axios.get(
        "http://localhost:1337/api/Terms-and-condition"
      );
      this.setState({
        termsInfo: {
          TermInfo: {
            description: res.data?.data?.attributes?.description,
          },
          loading: false,
        },
      });
    } catch (err) {
      console.log("TermInfo error", err.response?.data?.error?.message);
    }
  };

  fetchedFileInfo = async () => {
    try {
      const res = await axios.get(
        "http://localhost:1337/api/File-manage?populate=*",
        {
          headers: {
            Authorization: `Bearer ${this.state?.token}`,
          },
        }
      );
      this.setState({
        fileInfo: {
          files: res.data?.data?.attributes?.files,
          loading: false,
        },
      });
    } catch (err) {
      console.log("FileInfo error", err.response?.data?.error?.message);
    }
  };

  fetchedMsgInfo = async () => {
    try {
      const res = await axios.get(
        "http://localhost:1337/api/Message?populate=*",
        {
          headers: {
            Authorization: `Bearer ${this.state?.token}`,
          },
        }
      );
      this.setState({
        messagesInfo: {
          messages: res.data?.data?.attributes?.messages,
          loading: false,
        },
      });
    } catch (err) {
      console.log("messagesInfo error", err.response?.data?.error?.message);
    }
  };

  fetchedTutorialInfo = async () => {
    try {
      const res = await axios.get(
        "http://localhost:1337/api/Tutorial?populate=*",
        {
          headers: {
            Authorization: `Bearer ${this.state?.token}`,
          },
        }
      );
      this.setState({
        tutorialInfo: {
          tutorials: res.data?.data?.attributes?.tutorials,
          loading: false,
        },
      });
    } catch (err) {
      console.log("tutorialInfo error", err.response?.data?.error?.message);
    }
  };

  render() {
    const value = {
      userRegistration: this.userRegistration,
      userLogin: this.userLogin,
      handleLogout: this.handleLogout,
      user: this.state.user,
      token: this.state.token,
      loginInfo: this.state.loginInfo,
      learningPointInfo: this.state.learningPointInfo,
      videoInfo: this.state.videoInfo,
      paymentInfo: this.state.paymentInfo,
      otherTechnologyInfo: this.state.otherTechnologyInfo,
      footerInfo: this.state.footerInfo,
      aboutInfo: this.state.aboutInfo,
      coursePlanInfo: this.state.coursePlanInfo,
      freeClassInfo: this.state.freeClassInfo,
      privacyPolicyInfo: this.state.privacyPolicyInfo,
      refundPolicyInfo: this.state.refundPolicyInfo,
      termsInfo: this.state.termsInfo,
      fileInfo: this.state.fileInfo,
      messagesInfo: this.state.messagesInfo,
      tutorialInfo: this.state.tutorialInfo,
    };
    return (
      <Context.Provider value={value}>{this.props.children}</Context.Provider>
    );
  }
}
