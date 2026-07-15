function RecentActivity({ passwords }) {

  const recentPasswords =
    [...passwords]
      .reverse()
      .slice(0, 5);

  return (
    <div className="activity-box">

      <h2>Recent Activity</h2>

      {recentPasswords.length === 0 ? (
        <p>No Activity Found</p>
      ) : (
        recentPasswords.map(
          (item, index) => (
            <div
              key={index}
              className="activity-item"
            >
              <strong>
                {item.website}
              </strong>

              <p>
                Updated:
                {item.updatedAt}
              </p>
            </div>
          )
        )
      )}
    </div>
  );
}

export default RecentActivity;