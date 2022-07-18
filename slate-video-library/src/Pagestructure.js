import toast, { Toaster } from "react-hot-toast";
import App from "./App";
import {
  ExplorepageContext,
  SingleVideopageContext,
  PlaylistpageContext,
  LikespageContext,
  WatchlaterpageContext,
  HistorypageContext,
  NotesAppContext,
  LoginSignupContext,
} from "./Context/CoreContextFiles";
function Pagestructure() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <ExplorepageContext>
        <SingleVideopageContext>
          <PlaylistpageContext>
            <LikespageContext>
              <WatchlaterpageContext>
                <HistorypageContext>
                  <NotesAppContext>
                    <LoginSignupContext>
                      <App />
                    </LoginSignupContext>
                  </NotesAppContext>
                </HistorypageContext>
              </WatchlaterpageContext>
            </LikespageContext>
          </PlaylistpageContext>
        </SingleVideopageContext>
      </ExplorepageContext>
    </div>
  );
}

export default Pagestructure;
