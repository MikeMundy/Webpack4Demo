import * as React from "react";

import { Attributes } from "./Attributes";

import "./chargen.scss";

export interface ICharGenChecklist {

}

export const CharGenChecklist: React.SFC<ICharGenChecklist> = (props: ICharGenChecklist) => {
    return (
        <React.Fragment>
            <div>&nbsp;</div>
            <div><b>Attributes > Background > Class > Focus > Hobby Skill > Equipment > Final Details</b></div>
            <ol>
                <li><b>Attributes:</b> DECISION: Decide how you want to determine your attributes:
                    <ul>
                        <li>CHOICE: Roll scores randomly:
                            <ul>
                                <li>Roll 3d6 six times, assign results to stats in order.</li>
                                <li>Optional: Set one stat to 14 if you wish.</li>
                            </ul>
                        </li>
                        <li>OR</li>
                        <li>CHOICE: Assign scores from a set:
                            <ul>
                                <li>Assign the following scores to your attributes in any order you wish: 14, 12, 11, 10, 9, and 7.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><b>Attribute Modifers:</b> Calculate the modifier for each of your attributes.
                    <ul>
                        <li>
                            3: -2; 4-7: -1; 8-13: +0; 14-17: +1; 18: +2
                        </li>
                    </ul>
                </li>
                <li><b>Background:</b> DECISION: Choose how to pick a background:
                    <ul>
                        <li>CHOICE: Use one of the 20 existing backgrounds:
                            <ul>
                                <li>DECISION: Decide how to select your background:
                                    <ul>
                                        <li>CHOICE:Pick a background from the list of 20 backgrounds.</li>
                                        <li>OR</li>
                                        <li>CHOICE: Randomly select a background from the list of 20 backgrounds.</li>
                                    </ul>
                                </li>
                                <li>DECISION: Decide how to how to determine what you get from your background:
                                    <ul>
                                        <li>CHOICE: Take the 'Quick Skills':
                                                <ul>
                                                <li>You get the three skills listed for the background at level-0.</li>
                                            </ul>
                                        </li>
                                        <li>OR</li>
                                        <li>CHOICE: Pick your own skills:
                                            <ul>
                                                <li>You get the free skill listed for the background at level-0.</li>
                                                <li>Pick two other skills from the Learning Table for the background (except Any Skill). If you pick two different skills, you get them at both at level-0. If you pick the same skill twice, you get just it at level-1 (including the free skill). You can't pick the same skill three times.</li>
                                            </ul>
                                        </li>
                                        <li>OR</li>
                                        <li>CHOICE: Roll on the Growth and Learning Tables for your background and see what you get:
                                            <ul>
                                                <li>REPEAT: Do the following <b>three</b> times:
                                                    <ul>
                                                        <li>DECISION: Decide whether to roll on the Growth Table or the Learning Table for your background.
                                                            <ul>
                                                                <li>CHOICE: Growth Table: Roll 1d6 on the Growth Table for your background.
                                                                    <ul>
                                                                        <li>+1 Any Stat: Add one point to any of your stats (max 18).</li>
                                                                        <li>+2 Mental: Add two points to your Intelligence, Wisdom or Charisma (max 18). You can add +1 to two different scores, or +2 to only one score. </li>
                                                                        <li>+2 Physical: Add two points to your Strength, Dexterity or Constitution (max 18). You can add +1 to two different scores, or +2 to only one score. </li>
                                                                        <li>(A specific skill, usually either Exert or Connect): Gain the skill at level-0. If you already have it at level-0, increase to level-1. If you already have it at level-1, gain a level in any non-psychic skill.</li>
                                                                        <li>Any skill: Pick any skill; gain the skill at level-0. If you already have it at level-0, increase to level-1. If you already have it at level-1, pick a different non-psychic skill.</li>
                                                                    </ul>
                                                                </li>
                                                                <li>OR</li>
                                                                <li>CHOICE: Learning Table: Roll 1d8 on the Learning Table for your background.
                                                                    <ul>
                                                                        <li>(A specific skill)): Gain the skill at level-0. If you already have it at level-0, increase to level-1. If you already have it at level-1, gain a level in any non-psychic skill.</li>
                                                                        <li>Any skill: Pick any skill; gain the skill at level-0. If you already have it at level-0, increase to level-1. If you already have it at level-1, pick a different non-psychic skill.</li>
                                                                        <li>Any Combat: Pick Punch, Shoot or Stab skill; gain the skill at level-0. If you already have it at level-0, increase to level-1. If you already have it at level-1, pick a different non-psychic skill.</li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>END REPEAT: You should have repeated the above set of steps three times. </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>OR</li>
                        <li>CHOICE: Make up your own background:
                            <ul>
                                <li>Name your background.</li>
                                <li>Pick any three non-psychic skills. If you pick three different skills, you get them at level-0. If you pick the same skill twice, you get it at level-1 and one other skill at level-0. You can't pick the same skill three times.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><b>Class:</b> DECISION: Choose your class:
                    <ul>
                        <li>CHOICE: <b>Expert</b>
                            <ul>
                                <li>Pick a non-combat focus; gain a level in that focus. (See Step 5 below for procedure.)</li>
                                <li>Once per scene, you can reroll a failed skill check, taking the new roll if it’s better.</li>
                                <li>LEVELING: When you advance an experience level, you  gain a bonus skill point that can be spent on any  non-combat, non-psychic skill. You can save this  point to spend later if you wish</li>
                                <li>HIT POINTS: You start with 1d6 hit points, plus your Constitution modifier (min. 1 hit point).</li>
                                <li>ATTACK BONUS: Your attack bonus is +0 (half your level, rounded down).</li>
                            </ul>
                        </li>
                        <li>OR</li>
                        <li>CHOICE: <b>Psychic</b>
                            <ul>
                                <li>Unlike most classes, you are able to learn any of the psychic skills.</li>
                                <li>DECISION: Either gain two psychic skills at level-0, or one psychic skill at level-1 (plus a level-1 technique for that skill).
                                    <ul>
                                        <li>CHOICE: You choose to gain two psychic skills at level-0
                                            <ul>
                                                <li>REPEAT: Repeat choosing a psychic skill twice:
                                                    <ul>
                                                        <li>Choose a psychic skill that you do not already have. You gain that skill at level-0.</li>
                                                        <li>You also gain the core technique for the psychic skill that you picked.</li>
                                                    </ul>
                                                </li>
                                                <li>END REPEAT: You should have picked two different psychic skills.</li>
                                            </ul>
                                        </li>
                                        <li>OR</li>
                                        <li>CHOICE: You choose to gain one psychic skill at level-1.
                                            <ul>
                                                <li>Choose a psychic skill that you do not already have. You gain that skill at level-1.</li>
                                                <li>You also gain the core technique for that psychic skill.</li>
                                                <li>You also gain one of the level-1 techniques available for that psychic skill.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>EFFORT: You have an Effort score equal to one plus the higher of your Wisdom or Constitution attribute modifiers, plus your highest psychic skill score (min 1).</li>
                                <li>HIT POINTS: You start with 1d6 hit points, plus your Constitution modifier (min. 1 hit point).</li>
                                <li>ATTACK BONUS: Your attack bonus is +0 (half your level, rounded down).</li>
                            </ul>
                        </li>
                        <li>OR</li>
                        <li>CHOICE: <b>Warrior</b>
                            <ul>
                                <li>Pick a combat focus; gain a level in that focus. (See Step 5 below for procedure.)</li>
                                <li>Warriors are lucky in combat. Once per scene, as  an Instant ability, you can either choose to negate  a successful attack roll against you or turn a  missed attack roll you made into a successful hit.  You can use this ability after the dice are rolled,  but it cannot be used against environmental damage,  effects without an attack roll, or hits on a  vehicle you’re occupying.</li>
                                <li>LEVELING: You gain two extra maximum hit points at each character level (inc. level 1).</li>
                                <li>HIT POINTS: You start with 1d6+2 hit points, plus your Constitution modifier (min. 1 hit point).</li>
                                <li>ATTACK BONUS: Your attack bonus is +1 (equal to your level).</li>
                            </ul>
                        </li>
                        <li>OR</li>
                        <li>CHOICE: <b>Adventurer</b>
                            <ul>
                                <li>REPEAT: Pick <b>two</b> of the following partial-classes:
                                <ul>
                                        <li>DECISION: Pick a partial class that you have not already picked:
                                        <ul>
                                                <li>CHOICE: <b>Partial Expert</b>
                                                    <ul>
                                                        <li>Pick a non-combat focus; gain a level in that focus. (See Step 5 below for procedure.)</li>
                                                        <li>LEVELING: When you advance an experience level, you gain a bonus skill point that can be spent on any  non-combat, non-psychic skill. You can save this  point to spend later if you wish.</li>
                                                    </ul>

                                                </li>
                                                <li>OR</li>
                                                <li>CHOICE: <b>Partial Psychic</b>
                                                    <ul>
                                                        <li>You are a restricted psychic. Pick one psychic skill. You can learn levels in that psychic skill (and its techniques), but no other psychic skills.</li>
                                                        <li>You gain level-0 in that psychic skill.</li>
                                                        <li>You also gain the core technique for that psychic skill.</li>
                                                        <li>EFFORT: You have an Effort score equal to one plus the higher of your Wisdom or Constitution attribute modifiers, plus the level of your psychic skill score (min 1).</li>
                                                    </ul>
                                                </li>
                                                <li>OR</li>
                                                <li>CHOICE: <b>Partial Warrior</b>
                                                    <ul>
                                                        <li>Pick a combat focus; gain a level in that focus. (See Step 5 below for procedure.)</li>
                                                        <li>HIT POINTS: You gain two extra maximum hit points at each character level (inc. level 1).</li>
                                                        <li>ATTACK BONUS: Your attack bonus gains +1 at first level, and +1 at fifth level.</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>END REPEAT: You should have picked two different partial classes.</li>
                                <li>HIT POINTS:  To determine an Adventurer's starting hit ponts, roll 1d6 and  add your Constitution modifier, to a minimum of 1 hit  point. Adventurers who’ve taken the Partial Warrior  option add 2 hit points to their maximum.</li>
                                <li>ATTACK BONUS:  Your attack bonus is +0 (half your level, rounded down). Adventurers with the Partial Warrior class add +1 to their attack bonus at level 1.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><b>Focus:</b> Choose a focus:
                    <ul>
                        <li>Choose any focus that you do not already have at its maximum level.</li>
                        <li>If you do not already have that focus, you gain it at level-1.</li>
                        <li>If you already have that focus, if you do not already have it at its maximum level, you gain the next level of the focus (level-2).</li>
                        <li>You gain any special abilities granted by the level in the focus.</li>
                        <li>If the focus level grants a bonus skill, gain the skill at level-0. If you already have it at level-0, increase to level-1. If you already have it at level-1, pick a different non-psychic skill.</li>
                        <li>If the focus level grants any combat skill, pick from Punch, Shoot or Stab skill.</li>
                        <li>Die Hard (level-1) grants an extra +2 hit points per level.</li>
                        <li>Psychic Training focus can only be selected by a character with the Psychic or Adventurer (Partial Psychic) class. Must pick a psychic skill that you have. It grants extra Effort, and additonal skill poins towards a psychic skill.</li>
                        <li>Specialist(Skill) focus can be taken more than once, each time for a different skill. Effectively, it's 20 different focusses.</li>
                        <li>Unique Gift focus can only be taken at level-1, and has an open effect.</li>
                        <li>Wild Psychic Talent focus can't be taken by a character with the Psychic or Adventurer (Partial Psychic) class. Gains 1 Effort. ??? Do they actually get a psychic skill, or just the core ability/technique of one?</li>
                    </ul>
                </li>
                <li><b>Hobby Skill:</b>
                    <ul>
                        <li>Pick any non-psychic skill; gain the skill at level-0. If you already have it at level-0, increase to level-1. If you already have it at level-1, pick a different non-psychic skill.</li>
                    </ul>
                </li>
                <li><b>Saving Throws:</b>
                    <ul>
                        <li>Your Physical saving throw is 15 minus the better of your Strength or Constitution attribute modifiers.</li>
                        <li>Your Mental saving throw is 15 minus the better of your Wisdom or Charisma attribute modifiers.</li>
                        <li>Your Evasion saving throw is 15 minus the better of your Dexterity or Intelligence attribute modifiers.</li>
                        <li>If you have a penalty in both modifiers, it’s possible to have a saving throw of 16 or more.</li>
                    </ul>
                </li>
                <li><b>Equipment:</b>
                    <ul>
                        <li>Either choose an equipment package from the list on the opposite page or roll 2d6 x 100 to find out how many credits you have to buy your beginning gear.</li>
                    </ul>
                </li>
                <li><b>Name & Goal:</b>
                    <ul>
                        <li>Pick a name and a goal.</li>
                    </ul>
                </li>                
            </ol>

            <ul>
                <li>Skill specific (granted by a Focus that gives a bonus skill)</li>
                <li>Any Skill</li>
                <li>Combat Skills</li>
                <li>Non-Psychic Skills</li>
                <li>Non-Combat Non-Psychic Skills</li>
                <li>Non-Combat Skills</li>
                <li>Origin Skills (if you have an Origin Focus)</li>
                <li>Psychic Skills</li>
            </ul>

            <Attributes/>

        </React.Fragment>
    )
}