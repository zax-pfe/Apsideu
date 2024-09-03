"use client";
import "../../styles/works/workpage.css";
interface WorksPageProps {
  params: {
    id: string;
  };
}

export default function Page(props: WorksPageProps) {
  const workpage_id = props.params.id;

  return (
    <div className="workpage">
      <div className="workpage-header test">
        <h1>{workpage_id}</h1>
      </div>
      <div className="workpage-content">
        <div className="workpage-navbar test">
          <div className="navbar-bar small"></div>
          <div className="navbar-text">back to home</div>
          <div className="navbar-bar large"></div>
        </div>
        <div className="workpage-images test"></div>
      </div>
    </div>
  );
}
