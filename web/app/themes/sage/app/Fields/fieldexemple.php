<?php

namespace App\Fields;

use Log1x\AcfComposer\Builder;
use Log1x\AcfComposer\Field;

class fieldexemple extends Field
{
    /**
     * The field group.
     */
    public function fields(): array
    {
        $fieldexemple = Builder::make('fieldexemple');

        $fieldexemple
            ->setLocation('post_type', '==', 'post');

        $fieldexemple
            ->addRepeater('items')
                ->addText('item')
            ->endRepeater();

        return $fieldexemple->build();
    }
}
