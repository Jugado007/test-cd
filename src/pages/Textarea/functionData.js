import clipboard from "copy-to-clipboard";
import { transform, getFonts } from "convert-unicode-fonts";

const fonts = getFonts();

export const copyToClipboardUpper = (text) => {
  clipboard(text.toUpperCase());
  alert(`!You have copied "${text}"`);
};

export const copyToClipboardLower = (text) => {
  clipboard(text.toLowerCase());
  alert(`!You have copied "${text}"`);
};

export const handleClickbubbleFont = (text) => {
  if (text === "") {
    clipboard(transform("Type or paste your content here", fonts["circled"]));
    alert(`!You have copied "${text}"`);
  } else {
    clipboard(transform(text, fonts["circled"]));
    alert(`!You have copied "${text}"`);
  }
};

export const handleClickbubbleFonts = (text) => {
  if (text === "") {
    clipboard(
      transform(
        "Type or paste your content here",
        fonts["negativeCircledCapital"]
      )
    );
    alert(`!You have copied "${text}"`);
  } else {
    clipboard(transform(text, fonts["negativeCircledCapital"]));
    alert(`!You have copied "${text}"`);
  }
};

export const handleClickScript = (text) => {
  if (text === "") {
    const unicodeScript = transform(
      "Type or paste your content here",
      fonts["italic"]
    );
    clipboard(unicodeScript);
    alert(`!You have copied "${text}"`);
  } else {
    const unicodeScript = transform(text, fonts["italic"]);
    clipboard(unicodeScript);
    alert(`!You have copied "${text}"`);
  }
};

export const handleClickScriptBold = (text) => {
  if (text === "") {
    const unicodeScriptBold = transform(
      "Type or paste your content here",
      fonts["boldItalic"]
    );
    clipboard(unicodeScriptBold);
    alert(`!You have copied "${text}"`);
  } else {
    const unicodeScriptBold = transform(text, fonts["boldItalic"]);

    clipboard(unicodeScriptBold);
    alert(`!You have copied "${text}"`);
  }
};

export const handleClickFraktur = (text) => {
  if (text === "") {
    const unicodeScripFraktur = transform(
      "Type or paste your content here",
      fonts["fraktur"]
    );
    clipboard(unicodeScripFraktur);
    alert(`!You have copied "${text}"`);
  } else {
    const unicodeScripFraktur = transform(text, fonts["fraktur"]);
    clipboard(unicodeScripFraktur);
    alert(`!You have copied "${text}"`);
  }
};

export const handleClickFrakturBold = (text) => {
  if (text === "") {
    const unicodeScripBoldFraktur = transform(
      "Type or paste your content here",
      fonts["boldFraktur"]
    );
    clipboard(unicodeScripBoldFraktur);
    alert(`!You have copied "${text}"`);
  } else {
    const unicodeScripBoldFraktur = transform(text, fonts["boldFraktur"]);
    clipboard(unicodeScripBoldFraktur);
    alert(`!You have copied "${text}"`);
  }
};

export const handleClickCircled = (text) => {
  if (text === "") {
    const unicodeScripCircled = transform(
      "Type or paste your content here",
      fonts["circled"]
    );
    clipboard(unicodeScripCircled);
    alert(`!You have copied "${text}"`);
  } else {
    const unicodeScripCircled = transform(text, fonts["circled"]);
    clipboard(unicodeScripCircled);
    alert(`!You have copied "${text}"`);
  }
};

export const handleClickCircledInverted = (text) => {
  if (text === "") {
    const unicodeNegativeCircledCapital = transform(
      "Type or paste your content here",
      fonts["negativeCircledCapital"]
    );
    clipboard(unicodeNegativeCircledCapital);
    alert(`!You have copied "${text}"`);
  } else {
    const unicodeNegativeCircledCapital = transform(
      text,
      fonts["negativeCircledCapital"]
    );
    clipboard(unicodeNegativeCircledCapital);
    alert(`!You have copied "${text}"`);
  }
};

export const handleClickSquared = (text) => {
  if (text === "") {
    const unicodeSquaredCapital = transform(
      "Type or paste your content here",
      fonts["squaredCapital"]
    );
    clipboard(unicodeSquaredCapital);
    alert(`!You have copied "${text}"`);
  } else {
    const unicodeSquaredCapital = transform(text, fonts["squaredCapital"]);
    clipboard(unicodeSquaredCapital);
    alert(`!You have copied "${text}"`);
  }
};

export const handleClickSquaredInverted = (text) => {
  if (text === "") {
    const unicodeNegativeSquaredCapital = transform(
      "Type or paste your content here",
      fonts["negativeSquaredCapital"]
    );
    clipboard(unicodeNegativeSquaredCapital);
    alert(`!You have copied "${text}"`);
  } else {
    const unicodeNegativeSquaredCapital = transform(
      text,
      fonts["negativeSquaredCapital"]
    );
    clipboard(unicodeNegativeSquaredCapital);
    alert(`!You have copied "${text}"`);
  }
};

export const handleClickCapitalized = (text) => {
  if (text === "") {
    clipboard("Type or paste your content here".toUpperCase());
    alert(`!You have copied "${text}"`);
  } else {
    clipboard(text.toUpperCase());
    alert(`!You have copied "${text}"`);
  }
};

export const handleClickFullWidth = (text) => {
  if (text === "") {
    const unicodeFullWidth = transform(
      "Type or paste your content here",
      fonts["fullWidth"]
    );
    clipboard(unicodeFullWidth);
    alert(`!You have copied "${text}"`);
  } else {
    const unicodeFullWidth = transform(text, fonts["fullWidth"]);
    clipboard(unicodeFullWidth);
    alert(`!You have copied "${text}"`);
  }
};

export const handleClickMonospace = (text) => {
  if (text === "") {
    const unicodeMonoSpace = transform(
      "Type or paste your content here",
      fonts["monospace"]
    );
    clipboard(unicodeMonoSpace);
    alert(`!You have copied "${text}"`);
  } else {
    const unicodeMonoSpace = transform(text, fonts["monospace"]);
    clipboard(unicodeMonoSpace);
    alert(`!You have copied "${text}"`);
  }
};

export const handleClickSansSerif = (text) => {
  if (text === "") {
    const unicodeSansSerif = transform(
      "Type or paste your content here",
      fonts["sansSerif"]
    );
    clipboard(unicodeSansSerif);
    alert(`!You have copied "${text}"`);
  } else {
    const unicodeSansSerif = transform(text, fonts["sansSerif"]);
    clipboard(unicodeSansSerif);
    alert(`!You have copied "${text}"`);
  }
};

export const handleClickSansSerifItalic = (text) => {
  if (text === "") {
    const unicodeSansSerifItalic = transform(
      "Type or paste your content here",
      fonts["sansSerifItalic"]
    );
    clipboard(unicodeSansSerifItalic);
    alert(`!You have copied "${text}"`);
  } else {
    const unicodeSansSerifItalic = transform(text, fonts["sansSerifItalic"]);
    clipboard(unicodeSansSerifItalic);
    alert(`!You have copied "${text}"`);
  }
};

export const handleClickSansSerifBold = (text) => {
  if (text === "") {
    const unicodesansSerifBold = transform(
      "Type or paste your content here",
      fonts["sansSerifBold"]
    );
    clipboard(unicodesansSerifBold);
    alert(`!You have copied "${text}"`);
  } else {
    const unicodesansSerifBold = transform(text, fonts["sansSerifBold"]);
    clipboard(unicodesansSerifBold);
    alert(`!You have copied "${text}"`);
  }
};

export const handleClickSansSerifBoldItalic = (text) => {
  if (text === "") {
    const unicodeSansSerifBoldItalic = transform(
      "Type or paste your content here",
      fonts["sansSerifBoldItalic"]
    );
    clipboard(unicodeSansSerifBoldItalic);
    alert(`!You have copied "${text}"`);
  } else {
    const unicodeSansSerifBoldItalic = transform(
      text,
      fonts["sansSerifBoldItalic"]
    );
    clipboard(unicodeSansSerifBoldItalic);
    alert(`!You have copied "${text}"`);
  }
};
