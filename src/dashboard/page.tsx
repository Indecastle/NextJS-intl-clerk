import { GetServerSideProps } from "next";

const Dashboard = () => {
  return <div>Enter</div>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default Dashboard;
