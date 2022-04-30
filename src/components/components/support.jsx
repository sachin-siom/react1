import React from 'react';

const Support = () => {
    return (
        <div>
            <center>
        <div
          style={{
            width: "50%",
            backgroundColor: "#e8e8e8",
            padding: 20,
            fontSize: 25,
            fontWeight: "bold",
            marginTop: 25,
            borderRadius: 7,
          }}
        >
          Support View
        </div>
      </center>
      <center className="table-responsive">
          <table
            style={{ width: "75%",alignItem:'center', right: 0, margin: 25 }}
            className="table  table-hover "
            border='1'
          >
            <thead>
              <tr className="bg-primary">
                <th scope="col">Sr.</th>
                <th scope="col">Status</th>
                <th scope="col">Username</th>
                <th scope="col">Title</th>
                <th scope="col">Mobile No.</th>
                <th scope="col">Description</th>
                <th scope="col">Comments</th>
                <th scope="col">Created On</th>
              </tr>
            </thead>
        </table>
        </center>
        </div>
    );
}

export default Support;
