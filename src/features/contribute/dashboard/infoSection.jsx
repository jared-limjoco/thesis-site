// eslint-disable-next-line no-use-before-define
import React from "react";
import H3 from "@/ui/heading/h3";
import P from "ui/heading/p";
import Tooltip from "ui/tooltip";
import ActivityItem from "./activityItem";

export default class DashboardInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      annotationActiveCount: 0,
      userActivity: [],
      lastAnnotation: 0,
      totalAnnotation: 0,
      username: this.props.username,
    };
  }

  async componentDidMount() {
    // For Active Annotation Session
    const annotationTotalCount = parseInt(
      localStorage.getItem("annotationTotalCount")
    );

    const annotationCurrentCount = parseInt(
      localStorage.getItem("annotationCurrentCount")
    );

    let annotationActiveCount = 0;
    if (annotationTotalCount && annotationCurrentCount) {
      annotationActiveCount = annotationTotalCount - annotationCurrentCount + 1;
    }

    const extractUser = await fetch("/api/extractUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.username),
    }).then(function (result) {
      return result.json();
    });

    this.setState({
      annotationActiveCount,
      userActivity: extractUser.userActivities,
      lastAnnotation: extractUser.lastAnnotationDate,
      totalAnnotation: extractUser.annotationCount,
    });
  }

  render() {
    return (
      <section className="mt-4 pb-12 bg-gray-100">
        <hr />

        <div className="flex flex-col mx-auto md:flex-row container lg:max-w-7xl lg:w-4/5 ">
          <div className="mx-auto sm:mx-0 md:w-2/5">
            <div className="bg-white w-80 p-5 shadow-2xl border rounded-md -mt-16">
              <H3 className="mb-4">Your profile</H3>
              <P>
                <Tooltip>Total number of annotations you made</Tooltip>
                <span className="font-bold">Total annotations: </span>{" "}
                {this.state.totalAnnotation}
              </P>
              <P>
                <Tooltip>Last time you annotated</Tooltip>
                <span className="font-bold">Latest Annotation: </span>{" "}
                {this.state.lastAnnotation}
              </P>
              <P>
                <Tooltip>Current active annotation from this session</Tooltip>
                <span className="font-bold">
                  Active Annotation Sessions:{" "}
                </span>{" "}
                {this.state.annotationActiveCount}
              </P>
            </div>
          </div>
          <div className="mt-10 md:-mt-12 px-5 h-96">
            <H3>Recent Activity</H3>
            <ul className="pt-5">
              {this.state.userActivity.map((activity, index) => {
                return <ActivityItem activity={activity} key={index} />;
              })}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
