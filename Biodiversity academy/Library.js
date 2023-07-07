// Array of books in the library
var books = [
    {
      title: "What is biodiversity",
      author: "Maclaurin, J., & Sterelny, K.",
      pdf: "https://ds.amu.edu.et/xmlui/bitstream/handle/123456789/9725/What%20is%20Biodiversity.pdf"
    },
    {
      title: " Ethics in biodiversity conservation: The meaning and importance of pluralism",
      author: "Cortes-Capano, G., Hausmann, A., Di Minin, E., & Kortetmäki, T.",
      pdf: "https://pdf.sciencedirectassets.com/271811/1-s2.0-S0006320722X0013X/1-s2.0-S0006320722003123/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQDkYmAwrO2KT4d84PwcYKu2LfWpzebxibOGtZIGEp4yuwIgQQZkO2TKXhHogYYtYEnd8PSDZ8DcxyNVJ6LTBPiP3GYqswUIUBAFGgwwNTkwMDM1NDY4NjUiDGSIF%2FRKA0Tjfit5NyqQBWD77nIsH%2BOhLA%2Buo0Jj61zCyKN9Zb6qb3RT%2Bq%2Bp5KbMmiDqTwaYfo8CKDchX0TeAC2v4TrSuoBgsH7FgJRzMpaQAfCTIXqwYDiLFGk%2BjGl%2FGu8DZoBejE992sXQkN3OwzsjcQEohtxoBc%2BeNFwzhhfLLBuzKiF3kwrsuKbeOYqPd5VT0NZHb9mNMdR%2F4X9p3tBw7dM8l1TIWoddDgOgwFON6cQdA%2Bpchyth5cowWj%2FoC28gk9WjvAtBmSPx61UqoUuGRx2l23%2F8%2BsPLNf%2BEaQTeJ1HPT%2BN0JIPaCJyOaMAZ3Obu0NTWGKoWusNGCLUVtPy4Ggd9yeWDErhHxHGVCO15MEy%2BO04POFCzD3n82e6ODsihgWavEUhnA6hT8EOg30uAKo9piSTPv89TcFVHeLbc6CFZmWRAFRXIuOV9Xhg1289qKqYprRMn06tcf3%2B65xGRDZoXmjB6NyERQjwLRDJB3BysoUf3gL6%2FBJa9hGIn20IhNa2%2BbZ%2FoY4sb7KqeKfxEZMRqF%2FfYXw0ZiFJv%2BkaDVM%2Fm3ZdNQJ1ZrPi5NZsLBC%2FnzsK6N2jYinQ14DXZYX6qTXt%2Bp2ma6rzqaJTK4TJL4y3AZQmTT1YfWVbJ6Nh%2FSS8gDqKAreJgR6iZ0NHA%2B6JiNYjHRZMD3R%2FMJzaiFnR0Fqrmj69g4415EOhYsQbBkGq9Qt%2BeNd5SULfAsPBeMEN32LbMCvzSw3KY648V1U5IGOmHnFDkE2c4US7XOjyKbmeWPHpmhQ%2F4F252P9egm4yBedUxw2Zhan%2BSfwmWx13TSqejiAdqnpGZuJGVnsklr1J%2BS%2Bz1k9%2BtTH%2FGXeZl3YeyZU8PSvp8VLBMD%2FTfTOboLjASPnDW%2BB4LbpcpQVbPMK6InaUGOrEBdHQEPGImL5ccrPHxsXYjXhiUKUgXwSAAP%2BCfbU8Vyr%2FZl7UkYc7rLRFb2u%2F40TAJcl%2FRpIRMHI1w47VVlcHYJHiY%2FirkHkzLRYMtHS%2BNERK3k0xPB%2FBvQS0Ts0LxDck%2BlJtTp01ie3VPI%2B7KSbSg7oXVc6NZTmlwYj%2F1EI7cCkU9zcXy%2Fvrl1etTGgYUPrijti5KmTiDSTN6R%2F10%2B%2FIWZ%2F8W8BAvkSIipy7ndObOOEkw&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230707T001022Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTY257FKLRS%2F20230707%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c91eaef3bf8a42aae437cc57dd188a244467fe5323680f3922257305f5e23da2&hash=99b4dce227d12b9aaed204161d0851fc8c9d7a20f1fa626ef8b7a9b09a6cba9d&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S0006320722003123&tid=spdf-33ece84d-a4b8-4be5-be33-30206eb06add&sid=f0c9e5bf3cd6b549c00879f9e8025d77ce59gxrqb&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=1c035101570c05015207&rr=7e2bdd2e8c944fca&cc=za."
    },
    {
      title: "Is  sustainable development bad for global biodiversity conservation?",
      author: "Clémençon, R. ",
      pdf: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/916CFD9C2A286FB6D2B8878F49E46C9D/S2059479821000144a.pdf/div-class-title-is-sustainable-development-bad-for-global-biodiversity-conservation-div.pdf"
    },
    {
        title:"The need for ecocentrism in biodiversity conservation",
        author:"Bron Taylor, Guillaume Chapron, Helen Kopnina, Ewa Orlikowska, Joe Gray, John J. Piccolo",
        pdf:"https://conbio.onlinelibrary.wiley.com/doi/epdf/10.1111/cobi.13541"
    },
    {
        title:"Grand Challenges in Global Biodiversity Threats",
        author:"Bradshaw, C. J",
        pdf:"file:///D:/Web%20development/Portfolio/Library/Grand%20Challenges%20in%20Global%20Biodiversity%20Threats.pdf"

    },
    {
        title:"Addressing the implementation challenge of the global biodiversity framework",
        author:"Phang, S. C., Failler, P., & Bridgewater, P.",
        pdf:"file:///D:/Web%20development/Portfolio/Library/Addressing%20the%20implementation%20challenge%20of%20the%20global%20biodiversity%20framework.pdf"
        
    },

  ];
  
  
  // Function to generate library items
  function generateLibraryItem(book) {
    var item = document.createElement("div");
    item.classList.add("library-item");
  
    var title = document.createElement("h2");
    title.textContent = book.title;
  
    var author = document.createElement("p");
    author.textContent = "Author: " + book.author;
  
    var link = document.createElement("a");
    link.href = book.pdf;
    link.textContent = "View PDF";
  
    item.appendChild(title);
    item.appendChild(author);
    item.appendChild(link);
  
    return item;
  }
  
  // Function to render the library
  function renderLibrary() {
    var library = document.getElementById("library");
  
    books.forEach(function(book) {
      var item = generateLibraryItem(book);
      library.appendChild(item);
    });
  }
  
  // Render the library on page load
  renderLibrary();
  
  