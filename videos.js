export const videoChannels = [
  {
    id: "khan",
    name: "Khan Academy",
    href: "https://www.youtube.com/@khanacademy",
    playlist: {
      href: "https://www.youtube.com/playlist?list=PLSQl0a2vh4HC8Tnp8lgLieZ3_PlMnV1ii",
      title: "Sequences, series and induction playlist",
    },
    about: "Free precalculus videos: explicit and recursive rules, arithmetic and geometric series, infinite sums.",
  },
  {
    id: "oct",
    name: "The Organic Chemistry Tutor",
    href: "https://www.youtube.com/@TheOrganicChemistryTutor",
    playlist: {
      href: "https://www.youtube.com/playlist?list=PLHgLUBSREUPl6Ie2hq2NdVdX3z-B8ldOi",
      title: "Sequences and series playlist",
    },
    about: "Worked examples on arithmetic and geometric sequences and series, finite and infinite.",
  },
  {
    id: "rv",
    name: "Revision Village",
    href: "https://www.youtube.com/@RevisionVillage",
    site: "https://www.revisionvillage.com/",
    about: "IB Mathematics: analysis and approaches SL/HL, Topic 1 sequences and series in exam language.",
  },
];

export const courseVideos = [
  {
    id: "khan-rules",
    channel: "khan",
    units: ["start", "special"],
    title: "Explicit and recursive definitions of sequences",
    yt: "KRFiAlo7t1E",
  },
  {
    id: "khan-arith",
    channel: "khan",
    units: ["arith"],
    title: "Introduction to arithmetic sequences",
    yt: "_cooC3yG_p0",
  },
  {
    id: "khan-asum",
    channel: "khan",
    units: ["arith-sum", "special"],
    title: "Arithmetic series intro",
    yt: "cYw4MFWsB6c",
  },
  {
    id: "khan-geo-form",
    channel: "khan",
    units: ["geo"],
    title: "Explicit and recursive geometric sequences",
    yt: "8a1a5A3CfdQ",
  },
  {
    id: "khan-gsum",
    channel: "khan",
    units: ["geo-sum"],
    title: "Geometric series",
    yt: "CecgFWTg9pQ",
  },
  {
    id: "khan-inf",
    channel: "khan",
    units: ["geo-sum", "mixed", "mastery"],
    title: "Sum of an infinite geometric series",
    yt: "b-7kCymoUpg",
  },
  {
    id: "oct-arith",
    channel: "oct",
    units: ["start", "arith", "arith-sum"],
    title: "Arithmetic sequences and series — basic introduction",
    yt: "XZJdyPkCxuE",
  },
  {
    id: "oct-geo",
    channel: "oct",
    units: ["geo", "geo-sum"],
    title: "Geometric sequences and series — basic introduction",
    yt: "zRKZ0-kOUZM",
  },
  {
    id: "oct-inf",
    channel: "oct",
    units: ["geo-sum", "mixed", "mastery"],
    title: "How to find the sum of a geometric series",
    yt: "URqODVcwqn8",
  },
  {
    id: "rv-arith",
    channel: "rv",
    units: ["arith", "arith-sum", "mixed", "mastery"],
    title: "Arithmetic sequences and series [IB Math AA SL/HL]",
    yt: "XO8RiMggsmY",
  },
  {
    id: "rv-geo",
    channel: "rv",
    units: ["geo", "geo-sum", "mixed", "mastery"],
    title: "Geometric sequences and series [IB Math AA SL/HL]",
    yt: "LV2Aah2_Qg8",
  },
];

const channelById = Object.fromEntries(videoChannels.map((c) => [c.id, c]));

export function ytWatch(id) {
  return "https://www.youtube.com/watch?v=" + encodeURIComponent(id);
}

export function videosForUnit(unitId) {
  return courseVideos.filter((v) => v.units.includes(unitId));
}

export function channelName(id) {
  return channelById[id]?.name || id;
}

function videoItemsHtml(list) {
  return list
    .map((v) => {
      const ch = channelName(v.channel);
      return `<li>
        <span class="yt-topic">${ch}</span>
        <a href="${ytWatch(v.yt)}" target="_blank" rel="noopener">${v.title}</a>
      </li>`;
    })
    .join("");
}

export function unitVideosHtml(unitId) {
  const list = videosForUnit(unitId);
  if (!list.length) return "";
  return `<div class="video-box">
    <h4>Watch</h4>
    <p>Related videos from Khan Academy, The Organic Chemistry Tutor, and Revision Village.</p>
    <ol class="yt-links">${videoItemsHtml(list)}</ol>
  </div>`;
}

export function channelsHtml() {
  const cards = videoChannels
    .map((c) => {
      const vids = courseVideos.filter((v) => v.channel === c.id);
      const links = videoItemsHtml(vids);
      const extra = [];
      extra.push(`<a href="${c.href}" target="_blank" rel="noopener">YouTube channel</a>`);
      if (c.playlist) extra.push(`<a href="${c.playlist.href}" target="_blank" rel="noopener">${c.playlist.title}</a>`);
      if (c.site) extra.push(`<a href="${c.site}" target="_blank" rel="noopener">revisionvillage.com</a>`);
      return `<div class="card resource-card">
        <h3>${c.name}</h3>
        <p class="resource-meta">YouTube</p>
        <p>${c.about}</p>
        <p class="channel-links">${extra.join(" · ")}</p>
        <ol class="yt-links">${links}</ol>
      </div>`;
    })
    .join("");
  return `<h2 style="margin-top:36px">YouTube channels</h2>
    <p class="lede" style="margin-top:0">Watch these next to the matching unit. Khan Academy and The Organic Chemistry Tutor build the idea; Revision Village uses IB AA language.</p>
    <div class="resource-grid">${cards}</div>`;
}
