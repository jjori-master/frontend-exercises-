import ServerComponent from '../../components/server-component';
import ClientComponent from '../../components/client-component';

export default function Home() {
  return (
    <div>
      인덱스 페이지
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
