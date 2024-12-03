import { TopBar } from '../../components/top-bar';
import { Cover } from './components/cover';

export const Profile = () => {
  return (
    <section className="w-full relative flex flex-col items-center min-h-svh pb-[5rem] md:pb-0 lg:mr-[21.25rem] xl:mr-[30rem] transition-all duration-500">
      <TopBar />
      <Cover />
      <section className="w-full p-3 flex flex-col gap-3"></section>
    </section>
  );
};
