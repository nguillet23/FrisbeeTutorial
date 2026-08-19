// ================================================================
// ✏️  CATEGORIES — define your categories here, in display order.
//     Each entry needs: id, name, desc
// ================================================================
const categories = [
  { id: 'offense',  name: 'Offense',                desc: 'Offensive sets, resets, and scoring plays' },
  { id: 'defense',  name: 'Defense',                desc: 'Defensive positioning, poaches, and D-blocks' },
  { id: 'handler',  name: 'Handler Sets (Endzone)', desc: 'Handler motion and reset systems' },
  { id: 'zone',     name: 'Zone',                   desc: 'Zone offense and defense' },
];

// ================================================================
// ✏️  CLIPS — add new clips here. Rules:
//
//   • NO id field needed — it's auto-generated from the title.
//   • categoryId must match one of the ids above.
//   • Clips display in the ORDER you write them here, grouped
//     by category order (offense first, defense second, etc.).
//   • video is optional — leave as '' to omit the player.
//   • tags is optional — leave as [] for no tags.
//
//  To add a clip, copy one block and paste it at the end of its
//  category group. That's it!
// ================================================================
const clipsRaw = [
  // ── OFFENSE ──────────────────────────────────────────────────
  {
    categoryId: 'offense',
    title: 'Defensively Forced Deep',
    notes: 'Dark #15 is being forced deep, so he does what he is forced. He then sees the disk is swung, so he runs to the other side where the disk will be.',
    tags: ['forced deep'],
    video: 'annotated_videos/Rutledge_Annotated.mp4',
  },
  {
    categoryId: 'offense',
    title: 'Deep Cut off of Openside Movement',
    notes: 'This is the full point of a good flowing offense. The final cut (Done by #16) does not cut deep until he makes eye contact with the thrower.',
    tags: ['deep cut'],
    video: 'annotated_videos/Anders_Annotated_Movavi.mp4',
  },
  {
    categoryId: 'offense',
    title: 'Continuation Cut off of Breakside Movement',
    notes: 'There are two cuts to the breakside. The first one sees the second one and decides to cut for him just when he finishes his cut by cutting back under for the disk.',
    tags: ['break cut'],
    video: 'annotated_videos/Osgar_Annotated.mp4',
  },
  {
    categoryId: 'offense',
    title: 'Give and Go Continuation Cut',
    notes: '#34 runs immediately upline after throwing the disk because he sees open space that he knows he can take.',
    tags: ['upline'],
    video: 'annotated_videos/Randolph_Annotated.mp4',
  },
  {
    categoryId: 'offense',
    title: 'Defense to Offense Transition',
    notes: 'The defense gets a block from a bad throw. The team make easy throws quickly to transition to offense. Players give enough space for each other to make sure each throw is easy.',
    tags: ['Fastbreak'],
    video: 'annotated_videos/Fastbreak_Annotated.mp4',
  },
  {
    categoryId: 'offense',
    title: 'Crossfield Huck',
    notes: 'The thrower does a small backhand fake to the openside, opening up the breakside huck. The cutter makes a hard cut to the breakside when he sees the fake.',
    tags: ['huck'],
    video: 'annotated_videos/Liam_Annotated.mp4',
  },
  {
    categoryId: 'offense',
    title: 'Crossfield Hammer',
    notes: 'The thrower knows the defender is unaware that the disc will go in the opposite direction. The cutter decides to run in the opposite direction of the disc to communicate that he is ready.',
    tags: ['hammer'],
    video: 'annotated_videos/Crossfield_Hammer_Annotated.mp4',
  },
  {
    categoryId: 'offense',
    title: 'Butterfly Cut',
    notes: 'The thrower knows the defender is unaware that the disc will go in the opposite direction. The cutter decides to run in the opposite direction of the disc to communicate that he is ready.',
    tags: ['butterfly'],
    video: 'annotated_videos/Butterfly_Annotated.mp4',
  },

  // ── DEFENSE ──────────────────────────────────────────────────
  {
    categoryId: 'defense',
    title: 'Man on Man',
    notes: 'This is normal defense where everyone covers there own man. The defenders are in good position and the offense is not able to get open for easy throws.',
    tags: ['normal defense'],
    video: 'videos/ManDefense.mp4',
  },
  {
    categoryId: 'defense',
    title: 'Sealing',
    notes: 'The handler defense must respect the force. He values keeping the force from what it is at the start of the point.',
    tags: ['sealing'],
    video: 'annotated_videos/Sealing_Annotated.mp4',
  },
  {
    categoryId: 'defense',
    title: 'Deep Help',
    notes: 'The players in the deep space are communicating to the defenders getting beat (covering underneath space) that they have assistance in the deepspace if the huck is thrown',
    tags: ['deep safety'],
    video: 'annotated_videos/DeepHelp_Annotated.mp4',
  },
  {
    categoryId: 'defense',
    title: 'Rolling in Handler Set',
    notes: 'There are multiple chances for the white team to switch (or roll) in the handler space. They communicate when they want to and when they do not. They get scored on when there is a miscommunication on who has who.',
    tags: ['switching'],
    video: 'annotated_videos/Rolling_Annotated.mp4',
  },
  {
    categoryId: 'defense',
    title: 'Switching between Cutters',
    notes: 'Light multiple times switches who they are covering in the middle of the cut because they see one of their teammates is in a better position to mark a player. This is done with lots of communication.',
    tags: ['switching'],
    video: 'annotated_videos/CutterSwitch_Annotated.mp4',
  },

  // ── HANDLER SETS ─────────────────────────────────────────────
  {
    categoryId: 'handler',
    title: 'Dump-Swing',
    notes: 'The dump handler throws the disk to the swing handler, who is running towards the open space.',
    tags: ['dump', 'swing'],
    video: 'annotated_videos/DumpSwing_Annotated.mp4',
  },
  {
    categoryId: 'handler',
    title: 'Upline Cut',
    notes: 'The cutter runs upline to create an opening for the thrower.',
    tags: ['upline'],
    video: 'annotated_videos/Upline_Annotated.mp4',
  },
  {
    categoryId: 'handler',
    title: 'Backdoor Cut',
    notes: 'When the reset moves horizontally away from the defender, there is a small opening for the cutter to receive the disk. The cutter waits for the dump to catch the disk before cutting for the next throw. He waits a little longer than most people think.',
    tags: ['dump'],
    video: 'annotated_videos/Backdoor_Annotated.mp4',
  },
  {
    categoryId: 'handler',
    title: '7 Cut',
    notes: '#7 is the dump handler who starts running upline, he is covered. He then starts to run in almost the opposite direction to open a small throwing window to get the frisbee from the thrower.',
    tags: ['handler'],
    video: 'annotated_videos/Seven_Annotated.mp4',
  },

  // ── ZONE ─────────────────────────────────────────────────────
  {
    categoryId: 'zone',
    title: 'Breaking a Zone',
    notes: "Every player is much closer no matter what. Fakes are constantly thrown. The thrower has to be very careful with the timing of the throw and the fake. The cutter has to be very patient and time their cut perfectly.",
    tags: ['pumpfakes'],
    video: 'videos/Zone.mp4',
  },
];
