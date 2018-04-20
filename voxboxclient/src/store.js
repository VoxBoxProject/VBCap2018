import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mainSentence: "Sample Sentence",
    words: [
      //Words that aren't in folders in WordGrid... some are commented out as the image isn't uplodad yet
      {
        value: "Again",
        src: "Again.png"
      } /*
      {
        value: "Finished",
        src: "Finished.png"
      },*/,
      {
        value: "Goodbye",
        src: "Goodbye.png"
      },
      {
        value: "Bad",
        src: "Bad.png"
      },
      {
        value: "Big",
        src: "Big.png"
      },
      {
        value: "Down",
        src: "Down.png"
      },
      {
        value: "Good",
        src: "Good.png"
      },
      {
        value: "Here",
        src: "Here.png"
      },
      {
        value: "In",
        src: "In.png"
      },
      {
        value: "Like",
        src: "Like.png"
      },
      {
        value: "Little",
        src: "Little.png"
      } /*
      {
        value: "More",
        src: "More.png"
      },*/,
      {
        value: "Off",
        src: "Off.png"
      },
      {
        value: "On",
        src: "On.png"
      },
      {
        value: "Out",
        src: "Out.png"
      },
      {
        value: "There",
        src: "There.png"
      },
      {
        value: "Up",
        src: "Up.png"
      } /*
      {
        value: "Want",
        src: "Want.png"
      },*/,
      {
        value: "Where", //map?
        src: "Where.png"
      },
      {
        value: "Who",
        src: "Who.png"
      }
    ],

    Common: [
      {
        value: "Yes",
        src: "Yes.png"
      },
      {
        value: "No",
        src: "No.png"
      },
      {
        value: "Me",
        src: "I.png"
      },
      {
        value: "You",
        src: "You.png"
      },
      {
        value: "Help",
        src: "Help.png"
      }
    ],

    Folders: [
      [
        //folder
        {
          //folder image. index after 0 are images within modal
          value: "People",
          src: "People.png"
        },
        [
          //words
          {
            value: "Mom",
            src: "Mom.png"
          },
          {
            value: "Dad",
            src: "Dad.png"
          },
          {
            value: "Teacher",
            src: "Teacher.png"
          },
          {
            value: "Friend",
            src: "Brother : Sister.png"
          }
        ]
      ], //end of folder 1
      [
        //folder 2 - feeling
        {
          //folder image. index after 0 are images within modal
          value: "Feeling",
          src: "Feeling.png"
        },
        [
          //words for modal
          {
            value: "Sad",
            src: "Sad.png"
          },
          {
            value: "Happy",
            src: "Happy.png"
          }
        ]
      ],

      [
        {
          //folder image. index after 0 are images within modal
          value: "Actions",
          src: "Go.png"
        },
        [
          //words
          {
            value: "Come",
            src: "Come.png"
          },
          {
            value: "Look",
            src: "Look.png"
          },
          {
            value: "Read",
            src: "Read.png"
          },
          {
            value: "Drink", //idk if this term is correct
            src: "Drink.png"
          },
          {
            value: "Eat",
            src: "Eat.png"
          },
          {
            value: "Go",
            src: "Go.png"
          },
          {
            value: "Sleep",
            src: "Sleep.png"
          },
          {
            value: "Sit",
            src: "Sit.png"
          },
          {
            value: "Stand Up",
            src: "Stand.png"
          },
          {
            value: "Play",
            src: "Play.png"
          },
          {
            value: "Jump",
            src: "Jump.png"
          },
          {
            value: "Close",
            src: "Close.png"
          },
          {
            value: "Run",
            src: "Run.png"
          },
          {
            value: "Wash",
            src: "Wash.png"
          },
          {
            value: "Open",
            src: "Open.png"
          },
          {
            value: "Say",
            src: "Say.png"
          },
          {
            value: "Tell",
            src: "Say.png"
          },
          {
            value: "Turn",
            src: "Turn.png"
          },
          {
            value: "Stop",
            src: "Stop.png"
          }
        ] //end of words
      ] //end of folder 3 - action
    ] //end of folds
  },
  mutations: {
    //closing and dragging words within the sentence bar
  },
  actions: {  
  }
});
