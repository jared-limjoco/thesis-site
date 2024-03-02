// eslint-disable-next-line no-use-before-define
import React from "react";
import { isMobile } from "react-device-detect";

import Page from "@/ui/page";
import MobileWarning from "features/annotate/mobileWarning";
import AnnotationSessionSelection from "features/annotate/selection";
import AnnotateForm from "features/annotate/form";
import AnnotationDone from "features/annotate/done";

export default class AnnotatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      annotationTotalCount: null,
      annotationCurrentCount: null,
      annotationSetData: null,
      username: "",
    };
  }

  componentDidMount() {
    const annotationTotalCount = parseInt(
      localStorage.getItem("annotationTotalCount")
    );

    const annotationCurrentCount = parseInt(
      localStorage.getItem("annotationCurrentCount")
    );

    const annotationSetData = JSON.parse(
      localStorage.getItem("annotationSetData")
    );
    this.setState({
      annotationCurrentCount,
      annotationTotalCount,
      annotationSetData,
    });
  }

  render() {
    const renderComponent = () => {
      /* If the user is using a mobile device */
      if (isMobile) {
        return <MobileWarning />;
      }

      /* If the user has no annotation sessions active */
      if (
        !this.state.annotationCurrentCount ||
        !this.state.annotationTotalCount
      ) {
        return <AnnotationSessionSelection />;
      }

      /* If the user has an on-going annotation session */
      if (
        this.state.annotationCurrentCount <= this.state.annotationTotalCount
      ) {
        const data = this.state.annotationSetData;
        const singleImage =
          data.imgRecords[this.state.annotationCurrentCount - 1];

        return (
          <AnnotateForm
            data={singleImage}
            current={this.state.annotationCurrentCount}
            total={this.state.annotationTotalCount}
          />
        );
      }

      /* If the user has finished all annotations */
      if (this.state.annotationCurrentCount > this.state.annotationTotalCount) {
        return (
          <AnnotationDone
            data={this.state.annotationSetData}
            total={this.state.annotationTotalCount}
            username={this.state.username}
          />
        );
      }

      return <>Loading</>;
    };
    return (
      <Page
        title="Annotate - Atlas Contribute"
        description="Contribute to Atlas! Let's make our streets accessible for all."
        contribute
      >
        {renderComponent()}
      </Page>
    );
  }
}
