import React from "react";

function BiddingSystem({ biddings, index }) {
    const [collapsed, setCollapsed] = React.useState(true);
    function handleToggle() {
        console.log("button clicked");
        setCollapsed((prevCollapsed) => !prevCollapsed);
    }

    return (
        <div className="container mb-2" style={{ marginLeft: index }}>
            {
                <div className="row bg-light mb-20 mt-20 px-10">
                    <div className="col-2 ms-0 ps-0 text-start">
                        {biddings.res.length > 0 ? <button className="btn btn-sm btn-primary me-2" onClick={handleToggle}>
                        {collapsed ? "+" : "-" }
                        </button> : <button className="btn btn-secondary btn-sm me-2 disabled" >
                        x
                        </button>}
                        <span>{biddings.bid}</span>
                    </div>
                    <div className="col text-secondary text-start">
                        <div>{biddings.sum}</div>
                        <div>{biddings.des1}</div>
                    </div>
                    {
                        !collapsed && biddings.res.map((bid)=>(
                            <BiddingSystem biddings={bid} index={index+20} />
                        ))
                    }
                </div>
            }
            
        </div>
    );
}

export default BiddingSystem;

/* From Module 17 discussion board.
There should be more details in Module 18's office hour

<i className="ms-0 ps-0 me-1 bi bi-plus-square text-success"></i>

export const HrApp = () => {
  const data = {
    "name": "John Doe",
    "title": "CEO",
    "directReports": [
      {
        "name": "Alice",
        "title": "Manager",
        "directReports": [
          {
            "name": "Bob",
            "title": "Team Lead",
            "directReports": [
              {
                "name": "Charlie",
                "title": "Software Engineer",
                "directReports": []
              },
              {
                "name": "Diana",
                "title": "Software Engineer",
                "directReports": []
              }
            ]
          },
          {
            "name": "Ric",
            "title": "Team Lead",
            "directReports": [
              {
                "name": "Frank",
                "title": "Team Lead",
                "directReports": []
              }
            ]
          }
        ]
      }
    ]
  }
 
  return (
    <Employees {...data} />
  );
}

----

And then a component that knows how to render a employee, which makes a recursive call for the employees whose report to the current employee:

export const Employees = ({ name, title, directReports, idx }) =>{
  const [collapsed, setCollapsed] = useState(false);

  const onToggleCollapse = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };

  return (
    <div style={{ marginLeft: idx }}>
      <div>
        {directReports.length > 0 ? <button onClick={onToggleCollapse}>{ collapsed ? "+" : "-" }</button> : null }
        {name} - {title}
      </div>
      {!collapsed && directReports.map((report, idx) => (
        <Employees {...report} idx={idx + 100} />
      ))}
    </div>
  );
}

*/