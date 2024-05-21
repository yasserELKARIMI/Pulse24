<?php

namespace App\Blocks;

use Log1x\AcfComposer\Block;
use Log1x\AcfComposer\Builder;

class Team extends Block
{
    /**
     * The block name.
     *
     * @var string
     */
    public $name = 'Team';

    /**
     * The block description.
     *
     * @var string
     */
    public $description = 'A block for displaying team members with picture, name, and position.';

    /**
     * The block category.
     *
     * @var string
     */
    public $category = 'formatting';

    /**
     * The block icon.
     *
     * @var string|array
     */
    public $icon = 'groups';

    /**
     * The supported block features.
     *
     * @var array
     */
    public $supports = [
        'align' => true,
        'align_text' => false,
        'align_content' => false,
        'full_height' => false,
        'anchor' => false,
        'mode' => false,
        'multiple' => true,
        'jsx' => true,
        'color' => [
            'background' => true,
            'text' => true,
            'gradient' => true,
        ],
    ];

    /**
     * The block fields.
     */
    public function fields(): array
    {
        $team = Builder::make('team');

        $team
            ->addRepeater('members')
                ->addImage('picture', ['label' => 'Picture'])
                ->addText('name', ['label' => 'Name'])
                ->addText('position', ['label' => 'Position'])
            ->endRepeater();

        return $team->build();
    }

    /**
     * Data to be passed to the block before rendering.
     */
    public function with(): array
    {
        return [
            'members' => $this->members(),
        ];
    }

    /**
     * Retrieve the team members.
     *
     * @return array
     */
    public function members()
    {
        return get_field('members') ?: [];
    }

    /**
     * The block template.
     *
     * @var array
     */
    public $template = [
        'core/paragraph' => ['placeholder' => 'Add a paragraph...'],
    ];

    /**
     * Assets enqueued when rendering the block.
     */
    public function assets(array $block): void
    {
        //
    }
}
