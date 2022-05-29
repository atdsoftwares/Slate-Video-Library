import React from "react";
import App from "./App";
import ExplorepageContext from "./Components/Context/ExplorepageContext";
import HistorypageContext from "./Components/Context/HistorypageContext";
import LikespageContext from "./Components/Context/LikespageContext";
import NotesAppContext from "./Components/Context/NotesAppContext";
import PlaylistpageContext from "./Components/Context/PlaylistpageContext";
import SingleVideopageContext from "./Components/Context/SingleVideopageContext";
import WatchlaterpageContext from "./Components/Context/WatchlaterpageContext";

function Pagestructure() {
  return (
    <div>
      <ExplorepageContext>
        <SingleVideopageContext>
          <PlaylistpageContext>
            <LikespageContext>
              <WatchlaterpageContext>
                <HistorypageContext>
                  <NotesAppContext>
                    <App />
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
